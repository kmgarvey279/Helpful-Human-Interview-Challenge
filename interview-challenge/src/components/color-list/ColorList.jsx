import React from "react";
import Color from "../color/Color";
import PropTypes from "prop-types";
import './ColorList.css'

function ColorList(props) {
  
  return (
    <div id='wrap'>
      {props.colorList.map((color) =>
        <Color category={color.category}
            hex={color.hex}
            style={color.style}/>
      )}
    </div>
  );
}

ColorList.propTypes = {
  colorList: PropTypes.array
};

export default ColorList;