import React from 'react';

import './About.scss';

import about from '../../../Images/about_photo.jpg';
import deco from '../../../Images/ciapka6.png';

const About = () => {
  return (
    <section className='About'>
      <div className='About__Container'>
        <div className='About__Content'>
          <div className='About__Photo'>
            <img
              className='About__Photo-img'
              src={about}
              alt='Dorota Dawidowicz'
            />
          </div>
          <div className='About__Text'>
            <div className='About__Text-container'>
              <h2 className='About__Text-header'>Litwo! Ojczyzno moja!</h2>
              <p className='About__Text-paragraph'>
                Mam na imię Dorota i jestem certyfikowanym konsultantem ślubnym
                oraz event managerem. Jako absolwentka Historii Sztuki
                Uniwersytetu Wrocławskiego, zachwycam się wszystkim co piękne
                (tak, jest to słowo, którego - jak twierdzi mój mąż -
                zdecydowanie nadużywam) i kreatywne. Mój świat jest
                uporządkowany, wszystko jest w nim na swoim miejscu, a chaos
                zagląda do niego bardzo rzadko. Dlatego planowanie i organizacja
                to mój żywioł, a pozytywne nastawienie pomoże nam na pewno w
                dobrym kontakcie i współpracy. Jeśli chcesz, żeby Twój ślub,
                przyjęcie albo impreza były starannie zaplanowane i przygotowane
                to daj mi znać, a ja wszystkim się zajmę. Zapraszam!
              </p>
            </div>
            <img
              className='About-decoration'
              src={deco}
              alt='decoration elemnt'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
