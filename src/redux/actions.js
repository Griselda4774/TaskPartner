// Action types
export const GET_TASKS = "GET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const RESET_TASKS = "RESET_TASKS";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_USER_STATE = "UPDATE_USER_STATE";
export const UPDATE_EMAIL_STATE = "UPDATE_EMAIL_STATE";
export const UPDATE_DOCID_STATE = "UPDATE_DOCID_STATE";
export const UPDATE_ISVERIFIED_STATE = "UPDATE_ISVERIFIED_STATE";
export const UPDATE_FIRSTNAME_STATE = "UPDATE_FIRSTNAME_STATE";
export const UPDATE_LASTNAME_STATE = "UPDATE_LASTNAME_STATE";

// Action creators

//Tasks actions
export const getTasks = (taskList) => ({
  type: GET_TASKS,
  payload: taskList,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  payload: task,
});

export const resetTasks = () => ({
  type: RESET_TASKS,
});

//User actions
export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateUserState = (user) => ({
  type: UPDATE_USER_STATE,
  payload: user,
});

export const updateEmailState = (email) => ({
  type: UPDATE_EMAIL_STATE,
  payload: email,
});

export const updateDocIdState = (docID) => ({
  type: UPDATE_DOCID_STATE,
  payload: docID,
});

export const updateIsVerifiedState = (isVerified) => ({
  type: UPDATE_ISVERIFIED_STATE,
  payload: isVerified,
});

export const updateFirstNameState = (firstName) => ({
  type: UPDATE_FIRSTNAME_STATE,
  payload: firstName,
});

export const updateLastNameState = (lastName) => ({
  type: UPDATE_LASTNAME_STATE,
  payload: lastName,
});
