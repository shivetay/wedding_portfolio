import React, { useState } from 'react';

import './Slider.scss';

import SliderImage from './SliderImage';

import photo1 from '../../../Images/photo1.jpg';
import photo2 from '../../../Images/photo2.jpg';
import photo3 from '../../../Images/photo3.jpg';
import photo4 from '../../../Images/photo4.jpg';
import photo5 from '../../../Images/photo5.jpg';

function Slider() {
  let slideArr = [
    {
      id: 1,
      src: photo1,
      text: 'Far far away, behind the word mountains',
      alt: 'wedding_photo',
    },
    {
      id: 2,
      src: photo2,
      text: 'Far far away, behind the word mountains',
      alt: 'wedding_photo',
    },
    {
      id: 3,
      src: photo3,
      text: 'Far far away, behind the word mountains',
      alt: 'wedding_photo',
    },
    {
      id: 4,
      src: photo4,
      text: 'Far far away, behind the word mountains',
      alt: 'wedding_photo',
    },
    {
      id: 5,
      src: photo5,
      text: 'Far far away, behind the word mountains',
      alt: 'wedding_photo',
    },
  ];
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
      {slideArr.map((item) => {
        return (
          <div
            className={`Slider__Slide` + (item.id - 1 === x ? ' active' : '')}
            key={item.id}
            style={{ transform: `translateX(${x}%)` }}>
            <SliderImage
              classTxt={'Slider__Slide-txt'}
              classImg={'Slider__Slide-img'}
              src={item.src}
              text={item.text}
              alt={item.alt}
            />
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
