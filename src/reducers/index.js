// combinar todos los reducers
import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

export default combineReducers({
  modals: modalReducer
})