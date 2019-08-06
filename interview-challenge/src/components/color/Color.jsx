import React from 'react';
import PropTypes from 'prop-types';
import './Color.css'

function Color(props) {
  return (
    <div>
      <div id='palette' style={{backgroundColor: props.hex}}></div>
      {props.hex}
    </div>
  );
}

Color.propTypes = {
  category: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

export default Color;