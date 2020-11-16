import React, { Component } from 'react';

import './Slider.scss';

import SliderImage from './SliderImage';

import photo1 from '../../../Images/photo1.jpg';
import photo2 from '../../../Images/photo2.jpg';
import photo3 from '../../../Images/photo3.jpg';
import photo4 from '../../../Images/photo4.jpg';
import photo5 from '../../../Images/photo5.jpg';

class Slider extends Component {
  state = {
    sliderArr: [
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
    ],
    activeImage: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.goRight();
    }, 10000);
  }

  goLeft = (value, e) => {
    e.preventDefault();
    const { activeImage, sliderArr } = this.state;
    let i = activeImage;
    if (i >= 0 && i < sliderArr.length - 1) {
      this.setState({ activeImage: i - 1 });
    } else {
      this.setState({ activeImage: 0 });
    }
  };

  goRight = (value, e) => {
    const { activeImage, sliderArr } = this.state;
    let i = activeImage;
    if (i >= 0 && i < sliderArr.length - 1) {
      this.setState({ activeImage: i + 1 });
    } else {
      this.setState({ activeImage: 0 });
    }
  };

  renderImages = () => {
    const { activeImage, sliderArr } = this.state;
    return (
      <div className='Slider'>
        {sliderArr.map((item) => {
          return (
            <div
              className={`Slider__Slide ${
                activeImage === item.id - 1 ? 'active' : ''
              }`}
              key={item.id}
              style={{ transform: `translateX(${activeImage}%)` }}>
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
      </div>
    );
  };

  render() {
    return <div>{this.renderImages()}</div>;
  }
}

export default Slider;
