import { Tasks } from "../../assets/data/Tasks";

const taskListInitialState = {
  tasks: [],
};

export const taskListReducer = (state = taskListInitialState, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.taskID == action.payload.taskID ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.taskID != action.payload.taskID
        ),
      };
    case "RESET_TASKS":
      return {
        ...state,
        tasks: [],
      };
    default:
      return state;
  }
};

const userInitialState = {
  user: {
    email: "",
    isLogin: false,
    userID: "",
  },
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: {
          email: action.payload.email,
          isLogin: action.payload.isLogin,
          userID: action.payload.userID,
        },
      };
    case "LOGOUT":
      return { ...state, user: { email: "", isLogin: false, userID: "" } };
    default:
      return state;
  }
};
