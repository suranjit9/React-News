
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../FirBase/Firbase.config'
import PropTypes from 'prop-types';




export const Authconstex = createContext(null);
const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loder, setLoder] = useState(true);

     //  Create User With Email & Password

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  Sing In With Email & Password
    const singInWithEmail = (email, password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign Out----------------
    const logOut = ()=>{
        setLoder(true)
        return signOut(auth);
    }
    // Set User in useState

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoder(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    


    const authinfo ={
        user,
        singInWithEmail,
        createUser,
        logOut,
        loder
    };
    return (
        <Authconstex.Provider value={authinfo}>
            {children}
        </Authconstex.Provider >
    );
};
AuthContext.propTypes ={
    children:PropTypes.node,
}
export default AuthContext;