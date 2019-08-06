import React from "react";
import Color from "../color/Color";
import ColorDetail from '../color-detail/ColorDetail';
import PropTypes from "prop-types";
import './ColorList.css'

function ColorList(props) {
  if (props.selectedColor == null) {
    return (
      <div id='wrap'>
        {props.colorList.map((color) =>
          <Color category={color.category}
              hex={color.hex}
              style={color.style}
              colorSelect={props.colorSelect}/>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <ColorDetail selectedColor={props.selectedColor} 
        colorList={props.colorList}/>
      </div>
    )
  }
}

ColorList.propTypes = {
  colorList: PropTypes.array,
  colorSelect: PropTypes.func,
  selectedColor: PropTypes.string
};

export default ColorList;