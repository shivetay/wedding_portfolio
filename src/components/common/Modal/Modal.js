import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.scss';

import Backdrop from './Backdrop';

const ModalOverlay = (props) => {
  const content = (
    <div className={`Modal ${props.className}`}>
      <header className={`Modal-header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <div className={`Modal-content ${props.contentClass}`}>
        {props.children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <ModalOverlay {...props} />
    </Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.any,
  onCancel: PropTypes.any,
};

export default Modal;
