// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbXvTUyKP2w-d1DTzdQ1S-G0B8EBv9RSc",
  authDomain: "worknest-9c8e1.firebaseapp.com",
  projectId: "worknest-9c8e1",
  storageBucket: "worknest-9c8e1.firebasestorage.app",
  messagingSenderId: "833755839783",
  appId: "1:833755839783:web:8d574ba2a273566e40fd02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;