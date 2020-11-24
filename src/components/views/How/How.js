import React from 'react';
import { Link } from 'react-router-dom';

import './How.scss';

const How = () => {
  return (
    <section className='How'>
      <div className='How__Container'>
        <div className='How__Content'>
          <h1>Jak działam</h1>
          <div className='How__Content-text'>
            <h2>Kontakt</h2>
            <p>
              Jeśli podejmiecie decyzję o tym, że chcecie przygotować dowolną
              imprezę, ale nie macie czasu, albo po prostu nie chce Wam się
              zajmować całą organizacją to zapraszam do
              <Link to='/contact'>kontaktu</Link>
              ze mną. Wystarczy zadzwonić, albo wysłać maila, a ja oddzwonię.
            </p>
          </div>
          <div className='How__Content-text'>
            <h2>Omówienie szczegółów</h2>
            <p>
              Po rozmowie telefonicznej i wstępnym nakreśleniu czego
              oczekujecie, proponuję Wam niezobowiązujące spotkanie w terminie,
              porze i miejscu dogodnym dla Was. Możemy umówić się na kawę w
              kawiarni lub mogę odwiedzić Was w domu/firmie. Na spotkaniu
              omówimy budżet, szczegóły tego, czego oczekujecie od Waszej
              imprezy i ode mnie.
            </p>
          </div>
          <div className='How__Content-text'>
            <h2>Wycena i umowa</h2>
            <p>
              W ciągu tygodnia od naszego spotkania wysyłam, przygotowaną
              specjalnie dla Was, ofertę z wyceną. Po jej zaakceptowaniu,
              podpisujemy umowę.
            </p>
          </div>
          <div className='How__Content-text'>
            <h2>Działamy!</h2>
            <p>
              Przygotowuję harmonogram działania, który Wam udostępniam i do
              którego w każdej chwili macie dostęp. Możecie śledzić krok po
              kroku, na jakim etapie jest organizacja Waszego ślubu, imprezy czy
              przyjęcia. Jesteśmy też w ciągłym kontakcie telefonicznym i
              mailowym.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
