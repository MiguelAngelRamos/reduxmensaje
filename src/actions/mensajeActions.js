import { AGREGAR_MENSAJE, ELIMINAR_MENSAJE } from "../types";

export const addMessageAction = (state) => {
  return {
    type: AGREGAR_MENSAJE,
    payload: state
  }
}

export const deleteMessageAction = (id) => {
  return {
    type: ELIMINAR_MENSAJE,
    payload: id
  }
}