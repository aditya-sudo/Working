import { combineReducers, createStore } from "redux";
import apiReducer from "./Reducer/apiReducer";
import userReducer from "./Reducer/userReducer";

export const store = createStore(
  combineReducers({
    apiReducer,
    userReducer,
  })
);
