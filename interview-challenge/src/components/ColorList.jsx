import React from "react";
import Color from "./Color";
import PropTypes from "prop-types";

function ColorList(props) {
  return (
    <div>
      {props.colorList.map((color) =>
        <Color category={color.category}
            hex={color.hex}/>
      )}
    </div>
  );
}

ColorList.propTypes = {
  colorList: PropTypes.array
};

export default ColorList;