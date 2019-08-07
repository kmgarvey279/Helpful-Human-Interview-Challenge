import React from "react";
import Color from "../color/Color";
import ColorDetail from '../color-detail/ColorDetail';
import PageSelect from '../page-select/PageSelect';
import PropTypes from "prop-types";
import './ColorList.css'
import colorList from '../../masterColorList.jsx'

function ColorList(props) {
  if (props.selectedColor == null) {
    let pageArr = [];
    let totalPages = Math.ceil(colorList.length / 12);
    let start = 0;
    let end = 12;
    for (let i = 0; i < totalPages; i++){
      let pageContent = colorList.slice(start, end);
      pageArr.push(pageContent);
      start = end
      end += 12;
    }
    
    var pages = [];
    for (let i = 1; i < pageArr.length; i++){
      pages.push(<PageSelect page={i} changePage={props.changePage} currentPage={props.currentPage}/>);
    }
    
    return (
      <div>
        <div id='wrap'>
          {pageArr[props.currentPage].map((color) =>
            <Color category={color.category}
            hex={color.hex}
            style={color.style}
            colorSelect={props.colorSelect}/>
          )}
        </div>
        <div id="pages">
          {pages}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ColorDetail selectedColor={props.selectedColor} 
        colorList={props.colorList}
        currentPage={props.currentPage}
        pages={props.pages}/>
      </div>
    )
  }
}

ColorList.propTypes = {
  colorSelect: PropTypes.func,
  selectedColor: PropTypes.string,
  currentPage: PropTypes.number,
  changePage: PropTypes.func
};

export default ColorList;