import React, { Fragment, useState } from 'react';

import './Slider.scss';

function Slider() {
  let slideArr = [1, 2, 3, 4, 5];
  const [x, setX] = useState(0);
  const goLeft = () => {
    console.log(x);
    x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    console.log(x);
    x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className='Slider'>
      {slideArr.map((item, index) => {
        return (
          <div
            className={`Slider__Slide` + (index - 1 === x ? ' active' : '')}
            key={index}
            style={{ transform: `translateX(${x}%)` }}>
            {item}
          </div>
        );
      })}

      <button id='goLeft' onClick={goLeft}>
        left
      </button>
      <button id='goRight' onClick={goRight}>
        right
      </button>
    </div>
  );
}

export default Slider;
