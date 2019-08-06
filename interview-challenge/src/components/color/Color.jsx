import React from 'react';
import PropTypes from 'prop-types';
import './Color.css'

function Color(props) {
  return (
    <div>
      <div id='palette' style={{backgroundColor: props.hex}}></div>
      <div id="label"><p>{props.hex}</p></div>
    </div>
  );
}

Color.propTypes = {
  category: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
}

export default Color;