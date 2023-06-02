import taskListReducer from "./reducers";
import { legacy_createStore as createStore } from "redux";

const store = createStore(taskListReducer);

export default store;
