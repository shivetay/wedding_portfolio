import React, { Component, Fragment } from 'react';

import './Slider.scss';

import SliderImage from './SliderImage';

import photo1 from '../../../Images/001.png';
import photo2 from '../../../Images/002.png';
import photo3 from '../../../Images/003.png';
import photo4 from '../../../Images/004.png';
import photo5 from '../../../Images/005.png';
import deco from '../../../Images/bohho_slider.png';

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
      {
        id: 5,
        src: photo5,
        alt: 'wedding_photo',
        deco: deco,
      },
    ],
    activeImage: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.goRight();
    }, 6500);
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
                activeImage === item.id - 1 ? 'visible' : ''
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
    return <Fragment>{this.renderImages()}</Fragment>;
  }
}

export default Slider;
