import React from 'react';

import './About.scss';

import about from '../../../Images/about_photo.jpg';

const About = () => {
  return (
    <section className='About'>
      <div className='About__Container'>
        <div className='About__Photo'>
          <img
            className='About__Photo-img'
            src={about}
            alt='photo Dorota Dawidowicz'
          />
        </div>
        <div className='About__Text'>
          <h2>Litwo! Ojczyzno moja!</h2>
          <p>
            Pierwsza z krzykiem podróżnego ściskał i z jego pierś powabną suknię
            materyjalną, różową, jedwabną gors wycięty, kołnierzyk z jutrzenką
            napotka się pomieszany, zły i w uczciwości, w skroń ucałowawszy,
            uprzejmie pozdrowił. A na wychowanie poznano stołeczne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
