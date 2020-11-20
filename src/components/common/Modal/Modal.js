import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Modal.scss';
import BackDrop from '../BackDrop/BackDrop';

const ModalOverlay = ({
  className,
  modalHeader,
  show,
  modalId,
  modalText,
  classModal,
  close,
}) => {
  const content = (
    <div
      className={`Modal__Container ${className}`}
      style={{
        display: show ? 'inline' : 'none',
      }}>
      <div key={modalId} className={`Modal__Content ${className}`}>
        <h2>{modalHeader}</h2>
        <div>{modalText}</div>
        <button className={`btn ${classModal}`} onClick={close}>
          Zamknij
        </button>
      </div>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-portal')
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'>
        <ModalOverlay {...props} />
      </CSSTransition>
      {props.show && <BackDrop onClick={props.close} />}
    </Fragment>
  );
};

Modal.propTypes = {
  modalHeader: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
  modalId: PropTypes.number.isRequired,
  classModal: PropTypes.string,
  className: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func,
};

export default Modal;
