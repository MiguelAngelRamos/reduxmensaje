import { MOSTRAR_MODAL_MENSAJE } from "../types";

export const openCloseModalAction = (state) => {
  return {
    type: MOSTRAR_MODAL_MENSAJE,
    payload: state
  }
}