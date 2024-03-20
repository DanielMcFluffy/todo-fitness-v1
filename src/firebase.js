// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVUj5HiOKdhgR3zW2os1L8N-pJ4nBeZ2A",
  authDomain: "fitness-app-2c838.firebaseapp.com",
  projectId: "fitness-app-2c838",
  storageBucket: "fitness-app-2c838.appspot.com",
  messagingSenderId: "222809827390",
  appId: "1:222809827390:web:b33dc113fee56d9b30096f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);