// combinar todos los reducers
import { combineReducers } from "redux";
import mensajeReducer from "./mensajeReducer";
import modalReducer from "./modalReducer";
import validationReducer from "./validationReducer";

export default combineReducers({
  modals: modalReducer,
  mensajes: mensajeReducer,
  validations: validationReducer
})