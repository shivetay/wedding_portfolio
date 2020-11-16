// import React, { useState } from 'react';

// import './Slider.scss';

// import SliderImage from './SliderImage';

// import photo1 from '../../../Images/photo1.jpg';
// import photo2 from '../../../Images/photo2.jpg';
// import photo3 from '../../../Images/photo3.jpg';
// import photo4 from '../../../Images/photo4.jpg';
// import photo5 from '../../../Images/photo5.jpg';

// function Slider() {
//   let slideArr = [
//     {
//       id: 1,
//       src: photo1,
//       text: 'Far far away, behind the word mountains',
//       alt: 'wedding_photo',
//     },
//     {
//       id: 2,
//       src: photo2,
//       text: 'Far far away, behind the word mountains',
//       alt: 'wedding_photo',
//     },
//     {
//       id: 3,
//       src: photo3,
//       text: 'Far far away, behind the word mountains',
//       alt: 'wedding_photo',
//     },
//     {
//       id: 4,
//       src: photo4,
//       text: 'Far far away, behind the word mountains',
//       alt: 'wedding_photo',
//     },
//     {
//       id: 5,
//       src: photo5,
//       text: 'Far far away, behind the word mountains',
//       alt: 'wedding_photo',
//     },
//   ];
//   const [x, setX] = useState(0);
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     goLeft();
//   //   }, 8000);
//   // });
//   const goLeft = () => {
//     console.log(x);
//     x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100);
//   };
//   const goRight = () => {
//     console.log(x);
//     x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100);
//   };

//   return (
//     <div className='Slider'>
//       {slideArr.map((item) => {
//         return (
//           <div
//             className={`Slider__Slide ${item.id - 1 === x ? 'active' : ''}`}
//             key={item.id}
//             style={{ transform: `translateX(${x * 100}%)` }}>
//             <SliderImage
//               classTxt={'Slider__Slide-txt'}
//               classImg={'Slider__Slide-img'}
//               src={item.src}
//               text={item.text}
//               alt={item.alt}
//             />
//           </div>
//         );
//       })}

//       <button id='goLeft' onClick={goLeft}>
//         left
//       </button>
//       <button id='goRight' onClick={goRight}>
//         right
//       </button>
//     </div>
//   );
// }

// export default Slider;

import React, { Component, Fragment } from 'react';

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

  goLeft = (value, e) => {
    e.preventDefault();
    const { activeImage, sliderArr } = this.state;
    let i = activeImage;
    if (i >= 0 && i < sliderArr.length - 1) {
      this.setState({ activeImage: i - 1 });
    } else {
      this.setState({ activeImage: 0 });
    }

    console.log(value);
    console.log(this.state.activeImage);
  };
  goRight = (value, e) => {
    e.preventDefault();
    const { activeImage, sliderArr } = this.state;
    let i = activeImage;
    if (i >= 0 && i < sliderArr.length - 1) {
      this.setState({ activeImage: i + 1 });
    } else {
      this.setState({ activeImage: 0 });
    }
    console.log(value);
    console.log(this.state.activeImage);
  };

  renderImages = () => {
    const { activeImage, sliderArr } = this.state;
    return (
      <div className='Slider'>
        {sliderArr.map((item) => {
          return (
            <Fragment key={item.id}>
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
              <button id='goLeft' onClick={(e) => this.goLeft(item.id, e)}>
                left
              </button>
              <button id='goRight' onClick={(e) => this.goRight(item.id, e)}>
                right
              </button>
            </Fragment>
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
