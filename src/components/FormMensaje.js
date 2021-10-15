import React, { useState} from 'react'
// bootstrap
import { Form, Button, Alert} from 'react-bootstrap';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addMessageAction } from '../actions/mensajeActions';
import { validationFormMessageAction } from '../actions/validationActions';
import { openCloseModalAction } from '../actions/modalActions';

// las librerias que instamos
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


const FormMensaje = () => {

  const [formValue, setFormValue] = useState({
    name: "",
    mensaje: ""
  });
  // funciones
  const dispatch = useDispatch();

  // error del formulario
  const errorForm = (state) => {
    dispatch(validationFormMessageAction(state))
  }

  // agregar el mensaje
  const addMessage = (state) => {
    dispatch(addMessageAction(state))
  }

  // para cerrar el modal una vez que el usuario envio su mensaje
  const closeModal = (state) => {
    dispatch(openCloseModalAction(state))
  }

  // Obtener estado de la validacion del formulario
  const errorFormValue = useSelector( state => state.validations.errorFormValidation)

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, mensaje } = formValue;
    // validar el formulario
    if(!name || !mensaje) {
      console.log("Todos los campos son obligatorios");
      errorForm(true);
    } else {
      // voy agregar el mensaje
      console.log('lo hiciste de manera correcta');
      addMessage({
        id: uuidv4(),
        name,
        mensaje,
        date: moment()
      })
    }
  }

  return (
    <Form className="d-grid gap-2 m-3" onChange={onChange} onSubmit={onSubmit}>

      <Form.Group className="text-center">
        <h1>Nuevo Mensaje</h1>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          name="mensaje"
          row={3}
          placeholder="Escribe lo que deseas comunicar..." />
      </Form.Group>

      <Button variant="primary" type="submit" size="lg">Enviar Mensaje</Button>
    </Form>
  )
}

export default FormMensaje
