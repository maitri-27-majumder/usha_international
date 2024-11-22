// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhc6BQys2vl38NGEzYFoI013CcPVp8gBI",
  authDomain: "usha-international-fd163.firebaseapp.com",
  databaseURL: "https://usha-international-fd163-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "usha-international-fd163",
  storageBucket: "usha-international-fd163.firebasestorage.app",
  messagingSenderId: "790804108940",
  appId: "1:790804108940:web:458fd9a1f5a03d0d4e0da9",
  measurementId: "G-GH780NYHYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
