// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-5qpsXt5eNDp4DX_hFgxH-y5iJa4HIVc",
  authDomain: "addtocart-1e39a.firebaseapp.com",
  projectId: "addtocart-1e39a",
  storageBucket: "addtocart-1e39a.firebasestorage.app",
  messagingSenderId: "258978902730",
  appId: "1:258978902730:web:b542d273fb97fe89713a33",
  measurementId: "G-6KC54LZ4D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export{auth}