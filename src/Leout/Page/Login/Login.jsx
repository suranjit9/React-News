import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authconstex } from "../../Proveder/AuthContext";
import Nav from "../nav/Nav";
import { useContext } from "react";


const Login = () => {
    const { singInWithEmail } = useContext(Authconstex);
    const locetion = useLocation();
    const neviget = useNavigate();
    const handeleEmailSignin = e => {
        e.preventDefault();
        const newFrom = new FormData(e.currentTarget);
        const email = newFrom.get('email');
        const password = newFrom.get('password');
        console.log(email, password);
        singInWithEmail(email, password)
            .then(result =>{
                console.log(result.user);
                neviget(locetion?.state? locetion.state : '/');
            })
    }
    return (
        <div>
            <Nav></Nav>

            <div className="w-1/3 mx-auto">

                <div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-center text-2xl font-bold mt-6 mb-2">Please Sign UP</h1>
                            <hr />
                            <form onSubmit={handeleEmailSignin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    <p className="text-center text-xl font-bold mt-4">Do not have an Account <Link className="text-green-600" to='/SignUP'>Sign UP</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;