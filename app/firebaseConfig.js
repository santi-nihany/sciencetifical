// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuoq4GeT8w8wRtXcbvv6iXxyvRZqgKh34",
  authDomain: "science-tifical.firebaseapp.com",
  projectId: "science-tifical",
  storageBucket: "science-tifical.appspot.com",
  messagingSenderId: "629132531147",
  appId: "1:629132531147:web:48d6c19acc030e2646924e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
