import { MOSTRAR_MODAL_MENSAJE } from "../types";

const initialState = {
  stateModal: false
}
// modal por defecto esta cerrado

export default function modalReducer(state=initialState, action) {
  switch(action.type) {
    case MOSTRAR_MODAL_MENSAJE: {
      return {
        ...state,
        stateModal: action.payload
      }
    }
    default:
      return state;
  }
}