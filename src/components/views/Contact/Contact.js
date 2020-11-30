import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// import logo from '../../../Images/logo_bohho.png';

import './Contact.scss';

import Footer from '../../layout/Footer/Footer';
// import Form from '../../common/Form/Form';

const Contact = () => {
  return (
    <section className='Contact visible'>
      <div className='Contact__Container'>
        <div className='Contact__Content'>
          {/* <h3>Bohho - organizacja ślubów i imprez</h3> */}
          <div className='content'>
            <FontAwesomeIcon className='icon' icon={faPhone} />
            <p className='Contact-paragraph'>887-623-220</p>
          </div>
          <div className='content'>
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            <p className='Contact-paragraph'> kontakt@bohho.eu</p>
          </div>

          <div className='Contact__Content-icons'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/bohho.sluby.imprezy'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/bohho_sluby_imprezy/'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className='Contact-paragraph-small'>Wrocław</p>
          <p className='Contact-paragraph-small'>NIP: 8992578165</p>
          {/* <Form /> */}
        </div>
        {/* <div className='Contact__Header'>
          <img className='Contact-img' src={logo} alt='logo_Bohho' />
        </div> */}
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
