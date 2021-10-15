import React from 'react'
import { useSelector } from 'react-redux';
import Mensaje from './Mensaje';

const ListMensaje = () => {
  const mensajes = useSelector(state => state.mensajes.mensajes)
  return (
    mensajes.map(mensaje => (<Mensaje key={mensaje.id} mensaje={mensaje} />))
  )
}

export default ListMensaje
