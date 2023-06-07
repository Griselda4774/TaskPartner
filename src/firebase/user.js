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
  sendEmailVerification,
  signInAnonymously,
} from "firebase/auth";
import {
  FIREBASE_APP,
  FIREBASE_AUTH,
  GOOGLE_PROVIDER,
  FIRESTORE_DB,
} from "../../firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { Alert } from "react-native";

// Register user with email and password
export const registerUser = async (user, password) => {
  await createUserWithEmailAndPassword(FIREBASE_AUTH, user.email, password)
    .then(async (userCredential) => {
      // Signed in
      user.userID = userCredential.user.uid;
      user.succesfulRegister = true;
      try {
        await sendEmailVerification(userCredential.user);
        Alert.alert("Verification email sent", "Please check your email.");
      } catch (error) {
        if (error.code === "auth/too-many-requests") {
          Alert.alert("Verification already sent", "Please check your email.");
        } else {
          Alert.alert("Can not send verification email", "Please try again.");
          console.log("Error sending email verification: ", error.code);
        }
      }
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Email already in use", "Please try again.");
      } else {
        Alert.alert("Something went wrong", "Please try again.");
        console.log("Error code: ", error.code);
      }
    });
};

// Login user with email and password
export const loginUser = async (user, password) => {
  await signInWithEmailAndPassword(FIREBASE_AUTH, user.email, password)
    .then(async (userCredential) => {
      user.userID = userCredential.user.uid;
      if (userCredential.user.emailVerified) {
        user.isVerified = true;
      } else {
        Alert.alert("Please verify your email");
        try {
          await sendEmailVerification(userCredential.user);
        } catch (error) {
          console.log("Error sending email verification: ", error);
        }
      }
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        Alert.alert("User not found", "Please register.");
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Incorrect password", "Please try again.");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Invalid email", "You must enter a valid email.");
      } else {
        Alert.alert("Something went wrong", " Please try again.");
      }
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

// Add user to firestore
export const addUserToFirestore = async (user) => {
  try {
    const newDocRef = await addDoc(collection(FIRESTORE_DB, "User"), {
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      userID: user.userID,
      isVerified: user.isVerified,
    });
    const documentID = newDocRef.id;
    await updateDoc(newDocRef, { docID: documentID });
    user.docID = documentID;
  } catch (error) {
    console.log("Error adding user document: ", error);
  }
};

//Get user data firestore
export const fetchUserData = async (user) => {
  try {
    const docRef = doc(FIRESTORE_DB, "User", user.docID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // Document exists
      const documentData = docSnap.data();
      user.lastName = documentData.lastName;
      user.firstName = documentData.firstName;
      user.email = documentData.email;
      user.isVerified = documentData.isVerified;
    } else {
      // Document does not exist
      console.log("User does not exist");
      return null;
    }
  } catch (error) {
    return null;
  }
};

// Update user to firestore
// 1) Get document id
export const findUserDocumentIdFromFirestore = async (user) => {
  const q = query(
    collection(FIRESTORE_DB, "User"),
    where("email", "==", user.email)
  );
  try {
    const querySnapshot = await getDocs(q);
    let documentId;
    querySnapshot.forEach((doc) => {
      documentId = doc.id;
    });
    return documentId;
  } catch (error) {
    console.log("Error finding document id: ", error);
  }
};

// 2) Update document
export const updateUserDocumentToFirestore = async (user) => {
  try {
    await updateDoc(doc(FIRESTORE_DB, "User", user.userID), {
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      isVerified: user.isVerified,
    });
  } catch (error) {
    console.log("Error updating user document: ", error);
  }
};

export const updateUserVerifyToFirestore = async (user) => {
  try {
    await updateDoc(doc(FIRESTORE_DB, "User", user.docID), {
      isVerified: user.isVerified,
    });
  } catch (error) {
    console.log("Error updating user document: ", error);
  }
};
