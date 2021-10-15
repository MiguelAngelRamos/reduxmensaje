import { AGREGAR_MENSAJE, ELIMINAR_MENSAJE } from "../types";

const initialState = {
  mensajes: []
}

export default function mensajeReducer(state=initialState, action ) {

  switch (action.type) {
    case AGREGAR_MENSAJE: {
      return {
        ...state,
        mensajes: [...state.mensajes, action.payload]
      }
    }
    case ELIMINAR_MENSAJE: {
      return {
        ...state,
        mensajes: state.mensajes.filter( mensaje => mensaje.id !== action.payload)
      }
    }
    default:
      return state;
  }
}