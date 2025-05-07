//DANGER: DO NOT SHARE THE CONFIG ONLINE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Oi9S96z6MT06noBqq10QpDRDJshUrLM",
  authDomain: "dragon-news-90440.firebaseapp.com",
  projectId: "dragon-news-90440",
  storageBucket: "dragon-news-90440.firebasestorage.app",
  messagingSenderId: "138552041136",
  appId: "1:138552041136:web:de14374a979747fafa2575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);