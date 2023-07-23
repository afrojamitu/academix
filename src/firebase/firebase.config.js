// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkj9OASv5BjyjGdO97YdBY7cijllTG8cc",
  authDomain: "academix-ebb0d.firebaseapp.com",
  projectId: "academix-ebb0d",
  storageBucket: "academix-ebb0d.appspot.com",
  messagingSenderId: "651083248374",
  appId: "1:651083248374:web:838e6f864506406eda72d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;