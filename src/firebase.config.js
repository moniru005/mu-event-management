// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr2c9TDMMAmwsLxoTsDokmpHn664k0Tyg",
  authDomain: "mu-event-management2.firebaseapp.com",
  projectId: "mu-event-management2",
  storageBucket: "mu-event-management2.appspot.com",
  messagingSenderId: "1013756926098",
  appId: "1:1013756926098:web:ea8f5c8ef922c03c6a2e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
