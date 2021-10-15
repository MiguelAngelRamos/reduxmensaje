import { VALIDACION_FORMULARIO } from "../types";

export const validationFormMessageAction = (state) => {
  return {
    type: VALIDACION_FORMULARIO,
    payload: state
  }
}