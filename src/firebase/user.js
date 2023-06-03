import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";

// Register user
export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
    .then((userCredential) => {
      // Signed in
      return (user = userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode} - ${errorMessage}`);
    });
};

// Login user
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return (user = userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode} - ${errorMessage}`);
    });
};

// Logout user
export const logoutUser = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(`Error code: ${error.code} - ${error.message}`);
    });
};
