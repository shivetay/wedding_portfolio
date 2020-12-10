import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Modal.scss';
import BackDrop from '../BackDrop/BackDrop';

import deco from '../../../Images/ciapka2_3.png';

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
        <h2 className='Modal__Header'>{modalHeader}</h2>
        {modalText.map((item) => {
          return (
            <div className='Modal__Content-text' key={item.id}>
              <p className='Modal__Paragraph'>{item.intro}</p>
              <ul className='Modal__List'>
                <li className='Modal__List-item'>{item.list}</li>
              </ul>
              <p className='Modal__Paragraph'>{item.text}</p>
            </div>
          );
        })}
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
  modalText: PropTypes.array,
  modalId: PropTypes.number.isRequired,
  classModal: PropTypes.string,
  className: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func,
};

export default Modal;
