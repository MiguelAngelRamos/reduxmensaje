import { VALIDACION_FORMULARIO } from "../types";

const initialState = {
  errorFormValidation: false
}

export default function validationReducer(state=  initialState, action) {
  switch (action.type) {
    case VALIDACION_FORMULARIO: {
      return {
        ...state,
        errorFormValidation: action.payload
      }
    }
    default:
      return state;
  }
}