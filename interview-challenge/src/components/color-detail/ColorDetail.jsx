import React from 'react';
import PropTypes from 'prop-types';
import FilteredColor from '../filtered-color/FilteredColor';
import './ColorDetail.css';

function ColorDetail(props) {
  const filteredColors = props.colorList.filter(color => color.category !== '');
  
  return (
    <div id="detailWrap">
      <div id='detailPalette' style={{backgroundColor: props.selectedColor}}>
      </div>
      <div id="detailLabel"><p>{props.selectedColor}</p></div>
      <div id='filterWrap'>
        {filteredColors.map((color) =>
          <FilteredColor category={color.category}
              hex={color.hex}
              style={color.style}
              colorSelect={props.colorSelect}/>
        )}
      </div>
    );
    </div>
  );
}



ColorDetail.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  colorList: PropTypes.object.isRequired
}

export default ColorDetail;