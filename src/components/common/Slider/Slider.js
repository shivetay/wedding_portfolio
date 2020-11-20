import React, { Component } from 'react';

import './Slider.scss';

import SliderImage from './SliderImage';

import photo1 from '../../../Images/1.JPG';
import photo2 from '../../../Images/199.JPG';
import photo3 from '../../../Images/22.JPG';
import photo4 from '../../../Images/IMG_1885.JPG';
import deco from '../../../Images/boho_slider.png';

class Slider extends Component {
  state = {
    sliderArr: [
      {
        id: 1,
        src: photo1,

        alt: 'wedding_photo',
        deco: deco,
      },
      {
        id: 2,
        src: photo2,

        alt: 'wedding_photo',
        deco: deco,
      },
      {
        id: 3,
        src: photo3,

        alt: 'wedding_photo',
        deco: deco,
      },
      {
        id: 4,
        src: photo4,

        alt: 'wedding_photo',
        deco: deco,
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
              key={item.id}>
              <SliderImage
                classTxt={'Slider__Slide-txt'}
                classImg={'Slider__Slide-img'}
                src={item.src}
                text={item.text}
                alt={item.alt}
                deco={item.deco}
                classDeco={'Slider__Slide-deco'}
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
