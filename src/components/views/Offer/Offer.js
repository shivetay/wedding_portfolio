import React, { Component } from 'react';

import './Offer.scss';

import Modal from '../../common/Modal/Modal';

class Offer extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
    console.log('modal');
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { showModal } = this.state;
    return (
      <section className='Offer'>
        <div className='Offer__Container'>
          <div className='Offer__Content'>
            <img
              className='Offer-img'
              src='https://images.unsplash.com/photo-1520182062070-2e037a6fbbba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
              alt='offer_photo'
            />
            <div className='Offer__Content-text'>
              <h3>Tadeusz</h3>
              <p>
                Wreszcie po całym domu dawne obyczaje swe rodzinne duszę
                utęsknioną
              </p>
              <button
                onClick={() => this.openModal()}
                className='btn btn-offer'>
                Więcej
              </button>
            </div>
            <Modal show={showModal} close={() => this.closeModal()} />
          </div>
          <div className='Offer__Content'>
            <Modal />
            <div className='Offer__Content-text'>
              <h3>Krzyczano</h3>
              <p> Bo nie był ruchawy od płaczącej matki pod lasem zwaliska.</p>
              <button className='btn btn-offer'>Więcej</button>
            </div>
            <img
              className='Offer-img'
              src='https://images.unsplash.com/photo-1537291167-7f1592be546c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
              alt='offer_photo'
            />
          </div>
          <div className='Offer__Content'>
            <img
              className='Offer-img'
              src='https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
              alt='offer_photo'
            />
            <div className='Offer__Content-text'>
              <h3>Litwę muram</h3>
              <p>Dano trzecią potrawę.</p>
              <button className='btn btn-offer'>Więcej</button>
            </div>
            <Modal />
          </div>
        </div>
      </section>
    );
  }
}

export default Offer;
