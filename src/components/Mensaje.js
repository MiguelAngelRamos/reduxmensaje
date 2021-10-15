import React from 'react'
import { Card, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteMessageAction } from '../actions/mensajeActions';

const Mensaje = (props) => {
  const { mensaje } = props;
  const dispatch = useDispatch();

  const deleteMessage = (id) => {
    dispatch(deleteMessageAction(id))
  }
  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <Card.Title>{mensaje.name}</Card.Title>
        <Card.Text>{mensaje.mensaje}</Card.Text>
        <Button variant="danger" onClick={ () => deleteMessage(mensaje.id)}>Eliminar Mensaje</Button>
      </Card.Body>
    </Card>
  )
}

export default Mensaje
