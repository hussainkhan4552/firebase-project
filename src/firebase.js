// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADbn5l8tpEjV1cj2F_fXTn3VOFd3uO03k",
  authDomain: "blog-post-efa7f.firebaseapp.com",
  projectId: "blog-post-efa7f",
  storageBucket: "blog-post-efa7f.appspot.com",
  messagingSenderId: "821723122675",
  appId: "1:821723122675:web:8f12b6e313c03a12696086",
  measurementId: "G-QG79L8F92K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
