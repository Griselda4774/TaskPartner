import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import {
  FIREBASE_APP,
  FIREBASE_AUTH,
  GOOGLE_PROVIDER,
} from "../../firebaseConfig";

// Register user with email and password
export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode} - ${errorMessage}`);
    });
};

// Login user with email and password
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
    .then((userCredential) => {})
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode} - ${errorMessage}`);
    });
};

// Login user with google
export const loginWithGoogle = async () => {
  try {
    await signInWithRedirect(FIREBASE_AUTH, GOOGLE_PROVIDER);
  } catch (error) {
    console.log("Error signing in with redirect:", error);
  }
};

// Login user with google
export const loginWithGoogle2 = () => {
  signInWithPopup(FIREBASE_AUTH, GOOGLE_PROVIDER)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      console.log(result.user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// Logout user
export const logoutUser = () => {
  signOut(FIREBASE_AUTH)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log(`Error code: ${error.code} - ${error.message}`);
    });
};
