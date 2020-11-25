import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SliderImage = ({ src, alt, classImg, classTxt, classDeco, deco }) => {
  return (
    <Fragment>
      <img className={classImg} src={src} alt={alt} />
      <div className='Container'>
        <div className='Container-img'>
          <img className={classDeco} src={deco} alt='decoration element' />
        </div>
        <p className={classTxt}>
          Organizuję kompleksowo śluby, imprezy, uroczystości rodzinne oraz
          przyjęcia. Zapraszam do zapoznania sie z ofertą i do kontaktu.
          <p className='span'>Dorota</p>
        </p>
      </div>
    </Fragment>
  );
};

SliderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  classTxt: PropTypes.string.isRequired,
  classDeco: PropTypes.string.isRequired,
  deco: PropTypes.string.isRequired,
};

export default SliderImage;
