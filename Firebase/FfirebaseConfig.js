  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {getAuth} from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDGa76Y9oeatE5Eqwm5ZIj-yHYJb8Ys9vo",
    authDomain: "fir-demo-af39e.firebaseapp.com",
    projectId: "fir-demo-af39e",
    storageBucket: "fir-demo-af39e.firebasestorage.app",
    messagingSenderId: "458882687108",
    appId: "1:458882687108:web:b99eeea64c2e58725ae2d1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)

  export  {auth,db}