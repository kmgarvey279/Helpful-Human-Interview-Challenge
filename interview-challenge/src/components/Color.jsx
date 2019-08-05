import React from 'react';
import PropTypes from 'prop-types';

function Color(props) {
  return (
    <div>
      <div id="palette"></div>
      {props.hex}
    </div>
  );
}

Color.propTypes = {
  category: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
}

export default Color;