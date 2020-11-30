import React from 'react';

import './About.scss';

import about from '../../../Images/dorcia2.png';

const About = () => {
  return (
    <section className='About'>
      <div className='About__Container'>
        <div className='About__Content'>
          <h1 className='About__Container-header'>O Mnie</h1>
          <div className='About__Text'>
            <div className='About__Text-container'>
              <p className='About__Text-paragraph'>
                Mam na imię Dorota i jestem certyfikowanym konsultantem ślubnym
                oraz event managerem. Jako absolwentka Historii Sztuki
                Uniwersytetu Wrocławskiego, zachwycam się wszystkim co piękne
                (tak, jest to słowo, którego - jak twierdzi mój mąż -
                zdecydowanie nadużywam) i kreatywne.
                <br />
                Mój świat jest uporządkowany, wszystko jest w nim na swoim
                miejscu, a chaos zagląda do niego bardzo rzadko. Dlatego
                planowanie i organizacja to mój żywioł, a pozytywne nastawienie
                pomoże nam na pewno w dobrym kontakcie i współpracy. Jeśli
                chcesz, żeby Twój ślub, przyjęcie albo impreza były starannie
                zaplanowane i przygotowane to daj mi znać, a ja wszystkim się
                zajmę. Zapraszam!
              </p>
            </div>
          </div>
          <div className='About__Photo'>
            <img
              className='About__Photo-img'
              src={about}
              alt='Dorota Dawidowicz'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
