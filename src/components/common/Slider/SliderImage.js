import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SliderImage = ({ src, alt, text, classImg, classTxt }) => {
  return (
    <Fragment>
      <img className={classImg} src={src} alt={alt} />;
      <h2 className={classTxt}>{text}</h2>
    </Fragment>
  );
};

SliderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  classTxt: PropTypes.string.isRequired,
};

export default SliderImage;
