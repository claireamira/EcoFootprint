// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVNBZ7s7U-2-lyWJzJcNKW9bUuaRKRFpc",
  authDomain: "ecofootprint-2ad89.firebaseapp.com",
  databaseURL: "https://ecofootprint-2ad89-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ecofootprint-2ad89",
  storageBucket: "ecofootprint-2ad89.appspot.com",
  messagingSenderId: "292023065982",
  appId: "1:292023065982:web:d974050c6e8ea1818c672f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };