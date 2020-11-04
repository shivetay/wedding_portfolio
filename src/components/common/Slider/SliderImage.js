import React from 'react';
import PropTypes from 'prop-types';

const SliderImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

SliderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SliderImage;
