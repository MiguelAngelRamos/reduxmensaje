import React from 'react'
import { Modal as ModalBs} from 'react-bootstrap';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { openCloseModalAction } from '../actions/modalActions';

const Modal = (props) => {
  const { children } = props;

  const dispatch = useDispatch();

  const closeModal = (state) => {
    // llamar la accion
    dispatch(openCloseModalAction(state))
  }
  // para acceder al state en el store (useSelector), para conocer el estado del modal
  const isOpenModal = useSelector( state => state.modals.stateModal);
  
  return (
    <ModalBs
      show={isOpenModal}
      size="lg"
      centered
      onHide={ ()=> closeModal(false)}
    >
      { children }
    </ModalBs>
  )
}

export default Modal
