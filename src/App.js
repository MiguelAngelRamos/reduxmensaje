import React from 'react'
// bootstrap
import { Container } from 'react-bootstrap';
// redux
import store from './store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <Container className="mt-5">
        <h1 className="text-center">Mensajes</h1>
      </Container>
    </Provider>
  )
}

export default App
