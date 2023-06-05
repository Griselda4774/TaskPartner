import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// Get all task from firestore
export const fetchTasks = async () => {
  try {
    const tasksRef = collection(FIRESTORE_DB, "Task");
    const querySnapshot = await getDocs(tasksRef);

    const fetchedTasks = [];
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      fetchedTasks.push(task);
    });

    return fetchedTasks;
  } catch (error) {
    console.log("Error fetching tasks: ", error);
  }
};

//Get task by user from firestore
export const fetchTasksByUser = async (user) => {
  try {
    const q = query(
      collection(FIRESTORE_DB, "Task"),
      where("userID", "==", user.email)
    );
    const querySnapshot = await getDocs(q);
    const tasks = [];
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      tasks.push(task);
    });
    return tasks;
  } catch (error) {
    console.log("Error fetching tasks: ", error);
  }
};

// Add task to firestore
export const addTaskToFirestore = async (task) => {
  try {
    const newDocRef = await addDoc(collection(FIRESTORE_DB, "Task"), {
      taskID: "",
      taskName: task.taskName,
      taskDetail: task.taskDetail,
      taskCategory: task.taskCategory,
      taskPriority: task.taskPriority,
      taskDueDate: task.taskDueDate,
      isCompleted: false,
      userID: task.userID,
    });
    console.log("Document written with ID: ", typeof newDocRef.id);
    const docID = newDocRef.id;
    await updateDoc(newDocRef, { taskID: docID });
    task.taskID = docID;
    return docID;
  } catch (error) {
    console.log("Error adding document: ", error);
  }
};

// Update task to firestore
// 1) Get document id
const findDocumentIdFromFirestore = async (taskID) => {
  const q = query(
    collection(FIRESTORE_DB, "Task"),
    where("taskID", "==", taskID)
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
export const updateDocumentToFirestore = async (item) => {
  try {
    await updateDoc(doc(FIRESTORE_DB, "Task", item.taskID), {
      taskName: item.taskName,
      taskDetail: item.taskDetail,
      taskCategory: item.taskCategory,
      taskPriority: item.taskPriority,
      taskDueDate: item.taskDueDate,
      isCompleted: item.isCompleted,
    });
  } catch (error) {
    console.log("Error updating document: ", error);
  }
};

// Delete task from firestore
export const deleteTaskFromFirestore = async (item) => {
  const documentId = await findDocumentIdFromFirestore(item.taskID);
  try {
    await deleteDoc(doc(FIRESTORE_DB, "Task", documentId));
    console.log("Document successfully deleted!");
  } catch (error) {
    console.log("Error deleting document: ", error);
  }
};
