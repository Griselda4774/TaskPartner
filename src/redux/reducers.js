import { Tasks } from "../../assets/data/Tasks";

const taskListInitialState = {
  tasks: [...Tasks],
};

const taskListReducer = (state = taskListInitialState, action) => {
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
    default:
      return state;
  }
};

export default taskListReducer;
