import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = ({ show, close, modalHeader, modalText }) => {
  return (
    <div
      className='Modal__Container'
      style={{
        display: show ? 'inline' : 'none',
      }}>
      <div className='Modal__Content'>
        <h2>{modalHeader}</h2>
        <p>{modalText}</p>
        <button onClick={close}>Zamknij</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalHeader: PropTypes.string,
  modalText: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func,
};

export default Modal;
