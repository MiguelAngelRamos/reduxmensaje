// Almacenar en el local Storage el state
export const setStateLocalStorage = (state) => {
  localStorage.setItem("mensajes", JSON.stringify(state));
}

// Obtener el state del localStorage

export const getStateLocalStorage = (state) => {
  const mensajesStorage = localStorage.getItem("mensajes");

  if( mensajesStorage === null) {
    return undefined;
  }

  return JSON.parse(mensajesStorage)
}

