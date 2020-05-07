//COMBINE REDUCERS
import storeReducer from "./storeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  store: storeReducer,
});
export default allReducers;
