import React, { Component, Fragment } from 'react';

import './Offer.scss';

import Modal from '../../common/Modal/Modal';

import button from '../../../Images/ciapka5.png';

class Offer extends Component {
  state = {
    offerItem: [
      {
        id: 1,
        offerHeader: 'Śluby i Wesela',
        modalText: [
          {
            id: 1,
            text:
              'Chętnie zorganizuję dla Was niezapomniane przyjęcia i uroczystości rodzinne. Kameralnie, czy z pompą – to już zależy od Was',
            list: 'Zaręczyny',
          },
          {
            id: 2,
            text:
              'Chętnie zorganizuję dla Was niezapomniane przyjęcia i uroczystości rodzinne. Kameralnie, czy z pompą – to już zależy od Was',
            list: 'Zaręczyny',
          },
          {
            id: 3,
            text:
              'Chętnie zorganizuję dla Was niezapomniane przyjęcia i uroczystości rodzinne. Kameralnie, czy z pompą – to już zależy od Was',
            list: 'Zaręczyny',
          },
        ],
        modalHeader: 'Śluby i Wesela',
      },
      {
        id: 2,
        offerHeader: 'Przyjęcia i Imprezy Rodzinne',
        modalText: [
          {
            id: 1,
            text:
              'Chętnie zorganizuję dla Was niezapomniane przyjęcia i uroczystości rodzinne. Kameralnie, czy z pompą – to już zależy od Was',
            list: 'Zaręczyny',
          },
          {
            id: 2,
            list: 'Chrzciny',
          },
          {
            id: 3,
            list: 'Babyshower',
          },
          {
            id: 4,
            list: 'Urodziny',
          },
          {
            id: 5,
            list: 'Okolicznościowe przyjęcia rodzinne',
          },
          {
            id: 6,
            list: 'Każde inne, o jakim marzycie',
          },
        ],
        modalHeader: 'Przyjęcia i Imprezy Rodzinne',
      },
      {
        id: 3,
        offerHeader: 'Spotkania i Imprezy Firmowe',
        modalText: [
          {
            id: 1,
            text:
              'Te duże i te małe – w końcu każdy chce czegoś innego. Dostosuję się do Waszych preferencji i przygotuję imprezę szytą na miarę',
            list: 'Imprezy integracyjne stacjonarne',
          },
          {
            id: 2,
            list: 'Imprezy integracyjne wyjazdowe',
          },
          {
            id: 3,
            list: 'Spotkania biznesowe',
          },
          {
            id: 4,
            list:
              'Imprezy firmowe okolicznościowe (świąteczne, karnawałowe, mikołajki, ogniska itp.)',
          },
          {
            id: 5,
            list: 'Eventy branżowe',
          },
          {
            id: 6,
            list: 'Inne',
          },
        ],
        modalHeader: 'Spotkania i Imprezy Firmowe',
      },
    ],
    showModal: false,
  };

  rnder;

  renderElements = () => {
    const { offerItem, showModal } = this.state;
    return (
      <div className='Offer__Conatiner'>
        <h1 className='Offer-h1'>Oferta</h1>
        <div key={offerItem.id} className='Offer__Content'>
          {offerItem.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className='Offer__Content-text'>
                  <h2 className='Offer-header'>{item.offerHeader}</h2>
                  <button
                    onClick={() => this.openModal(item.id)}
                    className='btn btn-offer'>
                    Więcej
                  </button>
                  <img
                    className='Offer__Content-deco'
                    src={button}
                    alt='decom_element'
                  />
                </div>
                <Modal
                  show={showModal === item.id}
                  classModal={'btn-offer'}
                  modalId={item.id}
                  modalHeader={item.modalHeader}
                  modalText={item.modalText}
                  close={() => this.closeModal()}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  };

  openModal = (value) => {
    this.setState({ showModal: value });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return <section className='Offer visible'>{this.renderElements()}</section>;
  }
}

export default Offer;
