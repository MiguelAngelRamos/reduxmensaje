import React from 'react'
// bootstrap
import { Container } from 'react-bootstrap';
// redux
import store from './store';
import { Provider } from 'react-redux';
// Componentes propios
import Menu from './components/Menu';
import Modal from './components/Modal';
import FormMensaje from './components/FormMensaje';
import ListMensaje from './components/ListMensaje';

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">Mensajes</h1>
        <ListMensaje />
      </Container>

      <Modal>
        <FormMensaje />
      </Modal>
 
    </Provider>
  )
}

export default App
