// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBOL7nTck8bBqRUM2gN7pWuZ-j8ZJVukw",
  authDomain: "email-password-authentic-50a86.firebaseapp.com",
  projectId: "email-password-authentic-50a86",
  storageBucket: "email-password-authentic-50a86.appspot.com",
  messagingSenderId: "231557168965",
  appId: "1:231557168965:web:f275b123feeb8c484b482c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

