import React, { Component, Fragment } from 'react';

import './Offer.scss';

import Modal from '../../common/Modal/Modal';

class Offer extends Component {
  state = {
    offerItem: [
      {
        id: 1,
        offerHeader: 'ŚLUBY I WESELA',
        modalText:
          'Mówią, że to najważniejszy dzień w życiu. I ja się z tym zgadzam. A jeśli chcecie, żeby ten Wasz dzień był do tego niezapomniany i idealny, to z przyjemnością się tym zajmę. •	Kompleksowa organizacja ślubu i wesela Przygotowanie „od A do Z”. To ja szukam i umawiam wszystkich podwykonawców, zajmuję się całym przebiegiem przygotowań, by ostatecznie koordynować Wasz dzień. •	Częściowa organizacja ślubu i wesela Przygotowanie tych punktów w ślubnym harmonogramie, którymi Wy nie chcecie, lub nie możecie się zająć. •	Koordynacja ślubu i wesela Jeśli sami wszystko przygotowaliście, ale chcecie, żeby ktoś czuwał nad Waszym dniem, by wszystko było tak, jak sobie wymarzyliście, to to opcja jest właśnie dla Was`',
        modalHeader: 'ŚLUBY I WESELA',
      },
      {
        id: 2,
        offerHeader: 'PRZYJĘCIA I IMPREZY RODZINNE',
        modalText:
          'Chętnie zorganizuję dla Was niezapomniane przyjęcia i uroczystości rodzinne. Kameralnie, czy z pompą – to już zależy od Was•	Zaręczyny•	Chrzciny•	Babyshower •	Urodziny•	Okolicznościowe przyjęcia rodzinne•	Każde inne, o jakim marzycie',
        modalHeader: 'PRZYJĘCIA I IMPREZY RODZINNE',
      },
      {
        id: 3,
        offerHeader: 'SPOTKANIA I IMPREZY FIRMOWE',
        modalText:
          'Te duże i te małe – w końcu każdy chce czegoś innego. Dostosuję się do Waszych preferencji i przygotuję imprezę szytą na miarę•	Imprezy integracyjne stacjonarne•	Imprezy integracyjne wyjazdowe•	Spotkania biznesowe•	Imprezy firmowe okolicznościowe (świąteczne, karnawałowe, mikołajki, ogniska itp.)•	Eventy branżowe•	Inne ',
        modalHeader: 'SPOTKANIA I IMPREZY FIRMOWE',
      },
    ],
    showModal: false,
  };

  rnder;

  renderElements = () => {
    const { offerItem, showModal } = this.state;
    return (
      <div className='Offer__Conatiner'>
        <div key={offerItem.id} className='Offer__Content'>
          {offerItem.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className='Offer__Content-text'>
                  <h3>{item.offerHeader}</h3>
                  <button
                    onClick={() => this.openModal(item.id)}
                    className='btn btn-offer'>
                    Więcej
                  </button>
                  <Modal
                    show={showModal === item.id}
                    classModal={'btn-offer'}
                    modalId={item.id}
                    modalHeader={item.modalHeader}
                    modalText={item.modalText}
                    close={() => this.closeModal()}
                  />
                </div>
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
    return <section className='Offer'>{this.renderElements()}</section>;
  }
}

export default Offer;
