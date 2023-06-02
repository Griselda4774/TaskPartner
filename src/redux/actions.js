// Action types
export const GET_TASKS = "GET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

// Action creators
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
