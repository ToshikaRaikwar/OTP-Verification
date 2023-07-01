// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBoZ5_w0M5-HUc4t8NrEf584ZKjU1ZXDwg",
  authDomain: "otpapp-e481d.firebaseapp.com",
  projectId: "otpapp-e481d",
  storageBucket: "otpapp-e481d.appspot.com",
  messagingSenderId: "577923165414",
  appId: "1:577923165414:web:5b0755e5b445c7d8049f27"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
