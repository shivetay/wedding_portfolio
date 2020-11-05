import React from 'react';
import PropTypes from 'prop-types';

const SliderImage = ({ src, alt, text }) => {
  return (
    <div>
      <img src={src} alt={alt} />;<h2>{text}</h2>
    </div>
  );
};

SliderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SliderImage;
