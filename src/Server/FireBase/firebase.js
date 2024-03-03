// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBivE3w-J45TIH7ni852P60yWaG8IaQuns",
  authDomain: "farmers-web-8063a.firebaseapp.com",
  projectId: "farmers-web-8063a",
  storageBucket: "farmers-web-8063a.appspot.com",
  messagingSenderId: "177882862354",
  appId: "1:177882862354:web:4e17a88d4b3a60097519cb",
  measurementId: "G-WVHPYEERC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const gitProvider = new GithubAuthProvider();

export { app, auth, provider, gitProvider };
