import React, { useState} from 'react'
// bootstrap
import { Form, Button, Alert} from 'react-bootstrap';

const FormMensaje = () => {

  const [formValue, setFormValue] = useState({
    name: "",
    mensaje: ""
  });

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
    } else {
      // voy agregar el mensaje
      console.log('lo hiciste de manera correcta');
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
