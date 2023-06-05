import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXLf_l0M6WZICU_-vz06ZNdBYlE_R40hM",
  authDomain: "taskpartner-8be14.firebaseapp.com",
  projectId: "taskpartner-8be14",
  storageBucket: "taskpartner-8be14.appspot.com",
  messagingSenderId: "274923479096",
  appId: "1:274923479096:web:4f55bffa8cd0321c5f06cd",
  measurementId: "G-JNKC8XSQ3W",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const GOOGLE_PROVIDER = new GoogleAuthProvider();
