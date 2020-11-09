import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = ({ show, close, modalHeader, modalText, modalId }) => {
  return (
    <div
      className='Modal__Container'
      style={{
        display: show ? 'inline' : 'none',
      }}>
      <div key={modalId} className='Modal__Content'>
        <h2>{modalHeader}</h2>
        <p>{modalText}</p>
        <button onClick={close}>Zamknij</button>
      </div>
      {console.log(modalId)}
    </div>
  );
};

Modal.propTypes = {
  modalHeader: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
  modalId: PropTypes.number.isRequired,
  show: PropTypes.bool,
  close: PropTypes.func,
};

export default Modal;
