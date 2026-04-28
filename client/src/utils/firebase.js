
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-5ed10.firebaseapp.com",
  projectId: "interviewiq-5ed10",
  storageBucket: "interviewiq-5ed10.firebasestorage.app",
  messagingSenderId: "725267180266",
  appId: "1:725267180266:web:304b7b06a46e528ce0c593"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}