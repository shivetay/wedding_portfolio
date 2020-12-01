import React, { Component, Fragment } from 'react';

import './Offer.scss';

import Modal from '../../common/Modal/Modal';

import button from '../../../Images/kolo.png';

class Offer extends Component {
  state = {
    offerItem: [
      {
        id: 1,
        offerHeader: 'Śluby i Wesela',
        modalText: [
          {
            id: 1,
            intro:
              'Mówią, że to najważniejszy dzień w życiu. I ja się z tym zgadzam. A jeśli chcecie, żeby ten Wasz dzień był do tego niezapomniany i idealny, to z przyjemnością się tym zajmę',
          },
          {
            id: 2,
            text:
              'Przygotowanie „od A do Z”. To ja szukam i umawiam wszystkich podwykonawców, zajmuję się całym przebiegiem przygotowań, by ostatecznie koordynować Wasz dzień',
            list: 'Kompleksowa organizacja ślubu i wesela ',
          },
          {
            id: 3,
            text:
              'Przygotowanie tych punktów w ślubnym harmonogramie, którymi Wy nie chcecie, lub nie możecie się zająć',
            list: 'Częściowa organizacja ślubu i wesela ',
          },
          {
            id: 4,
            text:
              'Jeśli sami wszystko przygotowaliście, ale chcecie, żeby ktoś czuwał nad Waszym dniem, by wszystko było tak, jak sobie wymarzyliście, to to opcja jest właśnie dla Was',
            list: 'Koordynacja ślubu i wesela ',
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
            intro:
              'Chętnie zorganizuję dla Was niezapomniane przyjęcia i uroczystości rodzinne. Kameralnie, czy z pompą – to już zależy od Was',
          },
          {
            id: 2,
            list: 'Zaręczyny',
          },
          {
            id: 3,
            list: 'Chrzciny',
          },
          {
            id: 4,
            list: 'Babyshower',
          },
          {
            id: 5,
            list: 'Urodziny',
          },
          {
            id: 6,
            list: 'Okolicznościowe przyjęcia rodzinne',
          },
          {
            id: 7,
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
            intro:
              'Te duże i te małe – w końcu każdy chce czegoś innego. Dostosuję się do Waszych preferencji i przygotuję imprezę szytą na miarę',
          },
          {
            id: 2,
            list: 'Imprezy integracyjne stacjonarne',
          },
          {
            id: 3,
            list: 'Imprezy integracyjne wyjazdowe',
          },
          {
            id: 4,
            list: 'Spotkania biznesowe',
          },
          {
            id: 5,
            list:
              'Imprezy firmowe okolicznościowe (świąteczne, karnawałowe, mikołajki, ogniska itp.)',
          },
          {
            id: 6,
            list: 'Eventy branżowe',
          },
          {
            id: 7,
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
      <div className='Offer__Container'>
        <h1 className='Offer-h1'>Oferta</h1>
        <div key={offerItem.id} className='Offer__Content'>
          {offerItem.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className='Offer__Content-text'>
                  <h2 className='Offer-header'>{item.offerHeader}</h2>
                  <button
                    onClick={() => this.openModal(item.id)}
                    className='btn btn-offer btn2'>
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
