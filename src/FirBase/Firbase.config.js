// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaa6-p0LomVNhNxGUAiTyg1BqV3zXSnfs",
  authDomain: "xbox-263cf.firebaseapp.com",
  projectId: "xbox-263cf",
  storageBucket: "xbox-263cf.appspot.com",
  messagingSenderId: "145153509675",
  appId: "1:145153509675:web:0531cd9b44d3b5000d9d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getApp(app);

export default auth;