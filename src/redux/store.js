import { taskListReducer, userReducer, localIdReducer } from "./reducers";
import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: taskListReducer,
  user: userReducer,
  localID: localIdReducer,
});

const store = createStore(rootReducer);

export default store;
