// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApnNLNLPqMI_KZ51yKJ4x4C0UYiK4jDqM",
  authDomain: "travel-planner-bcd4c.firebaseapp.com",
  projectId: "travel-planner-bcd4c",
  storageBucket: "travel-planner-bcd4c.appspot.com",
  messagingSenderId: "439192006072",
  appId: "1:439192006072:web:3a34bb921488a9f1f1334d",
  measurementId: "G-NF7HMN46LT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);