import { Tasks } from "../../assets/data/Tasks";
import {
  GET_TASKS,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  RESET_TASKS,
  LOGIN,
  LOGOUT,
  UPDATE_USER_STATE,
  UPDATE_EMAIL_STATE,
  UPDATE_DOCID_STATE,
  UPDATE_LOCAL_ID,
} from "./actions";

const taskListInitialState = {
  tasks: [],
};

export const taskListReducer = (state = taskListInitialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.taskID == action.payload.taskID ? action.payload : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.taskID != action.payload.taskID
        ),
      };
    case RESET_TASKS:
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
    lastName: "",
    firstName: "",
    email: "",
    isLogin: false,
    userID: "",
    docID: "",
    isVerified: false,
  },
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: true,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          lastName: "",
          firstName: "",
          email: "",
          isLogin: false,
          userID: "",
          docID: "",
          isVerified: false,
        },
      };
    case UPDATE_USER_STATE:
      return {
        ...state,
        user: {
          ...state.user,
          lastName: action.payload.lastName,
          firstName: action.payload.firstName,
          email: action.payload.email,
          userID: action.payload.userID,
          docID: action.payload.docID,
          isVerified: action.payload.isVerified,
        },
      };
    case UPDATE_EMAIL_STATE:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
    case UPDATE_DOCID_STATE:
      return {
        ...state,
        user: {
          ...state.user,
          docID: action.payload,
        },
      };
    default:
      return state;
  }
};

const initialLocalIdState = {
  localID: 1,
};

export const localIdReducer = (state = initialLocalIdState, action) => {
  switch (action.type) {
    case UPDATE_LOCAL_ID:
      return {
        ...state,
        localID: state.localID + 1,
      };
    default:
      return state;
  }
};
