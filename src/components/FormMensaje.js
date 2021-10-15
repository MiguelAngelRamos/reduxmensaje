import React, { useState} from 'react'
// bootstrap
import { Form, Button, Alert} from 'react-bootstrap';

const FormMensaje = () => {

  const [formValue, setFormValue] = useState({
    name: "",
    mensaje: ""
  });

  return (
    <Form className="d-grid gap-2 m-3">

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
