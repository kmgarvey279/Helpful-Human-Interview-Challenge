import React from 'react';
import PropTypes from 'prop-types';
import './FilteredColor.css'

function FilteredColor(props) {
  return (
    <div>
      <div id='filteredPalette' style={{backgroundColor: props.hex}}
      onClick={() => {props.colorSelect(props.hex);}}>
      </div>
      <div id="filteredLabel"><p>{props.hex}</p></div>
    </div>
  );
}

FilteredColor.propTypes = {
  category: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  colorSelect: PropTypes.func.isRequired
}

export default FilteredColor;