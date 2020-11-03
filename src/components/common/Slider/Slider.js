import React from 'react';

import './Slider.scss';

function Slider() {
  let slideArr = [1, 2, 3, 4, 5];
  return (
    <div className='Slider'>
      {slideArr.map((item, index) => {
        return (
          <div className='Slider__Slide' key={index}>
            {item}
          </div>
        );
      })}
      <button id='goLeft'>left</button>
      <button id='goRight'>right</button>
    </div>
  );
}

export default Slider;
