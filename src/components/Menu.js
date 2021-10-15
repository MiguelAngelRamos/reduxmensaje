import React from 'react';
import LogoRedux from '../assets/img/redux.png';
// bootstrap
import { Container, Navbar, Button } from 'react-bootstrap';
// redux
import { useDispatch } from 'react-redux';
import { openCloseModalAction } from '../actions/modalActions';

const Menu = () => {

  const dispatch = useDispatch();

  const openCloseModal = (state) => {
    // aqui vamos a llamar a la accion
    dispatch(openCloseModalAction(state))
  }

  const openModal = () => {
    openCloseModal(true)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            className="d-inline-block aling-top me-4" 
            src={LogoRedux} 
            alt="Mensajes Redux App"
            width="30"
            height="30" 
          />
          Mensajes app Redux
        </Navbar.Brand>

        <Button variant="outline-success" onClick={openModal}>
          Nuevo Mensaje
        </Button>
      </Container>
    </Navbar>
  )
}

export default Menu
