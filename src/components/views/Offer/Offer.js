import React, { Component, Fragment } from 'react';

import './Offer.scss';

import Modal from '../../common/Modal/Modal';

class Offer extends Component {
  state = {
    offerItem: [
      {
        id: 1,
        offerImg:
          'https://images.unsplash.com/photo-1520182062070-2e037a6fbbba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        offerText:
          ' Wreszcie po całym domu dawne obyczaje swe rodzinne duszę utęsknioną',
        offerHeader: 'Tadeusz',
        modalText:
          'modal text here lorem Widać, że nam się sprawa. My od siebie czuł choroby zaród. Krzyczano na Lombardzkiem polu. Jak mnie polityka nudzi. jeżeli z nim się kołem. W zamku sień wielka, jeszcze z jutrzenką napotka się jako po kryjomu kazał stoły.',
        modaleHeader: 'Sędzia, a Sędziego',
      },
      {
        id: 2,
        offerImg:
          'https://images.unsplash.com/photo-1537291167-7f1592be546c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        offerText:
          ' Polski trzech mocarzów albo też same widzi sprzęty, też nie może.',
        offerHeader: 'ogrodowych grządek',
        modalText:
          'Ostrej świecisz Bramie! Ty, co porabiał? Każdy, gdzie panieńskim rumieńcem dzięcielina pała a wzdycha do sieni siadł przy boku miał, w naukach postąpił choć najwymowniejsza. Ale co o czyjeś kolana pośliznęła się krzywi i jak znawcy,',
        modaleHeader: ' zamkowej sieni siadł',
      },
      {
        id: 3,
        offerImg:
          'https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        offerText: 'Rejent na polu szukała kogoś posadzić na konikach małe',
        offerHeader: 'Bo nie był to mówiąc',
        modalText:
          'grabliska suwane po francusku. Biegali wszyscy słuchali w ziemstwie i stoi wypisany każdy mimowolnie porządku i zabawiać lubił od baśni historyje gadał. On za dowód dobroci?',
        modaleHeader: 'Wtem pan Sędzia',
      },
    ],
    showModal: 0,
  };

  renderElements = () => {
    const { offerItem, showModal } = this.state;
    return (
      <Fragment>
        {offerItem.map((item) => {
          return (
            <div key={item.id} className='Offer__Content'>
              <img
                className='Offer-img'
                src={item.offerImg}
                alt='offer_photo'
              />
              <div className='Offer__Content-text'>
                <h3>{item.offerHeader}</h3>
                <p>{item.offerText}</p>
                <button
                  onClick={() => this.openModal(item.id)}
                  className='btn btn-offer'>
                  Więcej
                </button>
              </div>
              <Modal
                modalId={item.id}
                modalHeader={item.modalHeader}
                modalText={item.modalText}
                show={showModal === item.id}
                close={() => this.closeModal()}
              />
            </div>
          );
        })}
      </Fragment>
    );
  };

  openModal = (value) => {
    this.setState({ showModal: value });
    console.log('modal');
  };
  closeModal = () => {
    this.setState({ showModal: 0 });
  };
  render() {
    return <section className='Offer'>{this.renderElements()}</section>;
  }
}

export default Offer;
