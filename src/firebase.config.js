// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNIs4brPNxsrJSTgvxUEIzXHrUvwSjgp4",
  authDomain: "otpverification-87ca8.firebaseapp.com",
  projectId: "otpverification-87ca8",
  storageBucket: "otpverification-87ca8.appspot.com",
  messagingSenderId: "901096921278",
  appId: "1:901096921278:web:02ba29a2d97184f7fb26ef",
  measurementId: "G-CPHV1QQCR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
