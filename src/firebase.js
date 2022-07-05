// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// import firebase from 'firebase/app';
// import'firebase/firestore'



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFJjHddIrb9nzePoDRnn1K_B6GlGX1Slk",
  authDomain: "react-hooks-blog-7d43f.firebaseapp.com",
  projectId: "react-hooks-blog-7d43f",
  storageBucket: "react-hooks-blog-7d43f.appspot.com",
  messagingSenderId: "578244015991",
  appId: "1:578244015991:web:6ae3ae30c38fe3cb1f9372",
  measurementId: "G-MMBJELSNMT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore();