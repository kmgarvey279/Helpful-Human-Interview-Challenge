import React from 'react';
import './Sidebar.css'
import PropTypes from 'prop-types';

function Sidebar(props){
  return (
    <div id="sidebar">
      <button onClick={() => {props.colorSelect(props.getRandom());}}>Random Color</button>
      <div id="colors">
        <h4 onClick={() => {props.categorySelect('red');}}>Red</h4>
        <h4 onClick={() => {props.categorySelect('orange');}}>Orange</h4>
        <h4 onClick={() => {props.categorySelect('yellow');}}>Yellow</h4>
        <h4 onClick={() => {props.categorySelect('green');}}>Green</h4>
        <h4 onClick={() => {props.categorySelect('blue');}}>Blue</h4>
        <h4 onClick={() => {props.categorySelect('purple');}}>Purple</h4>
        <h4 onClick={() => {props.categorySelect('brown');}}>Brown</h4>
        <h4 onClick={() => {props.categorySelect('gray');}}>Gray</h4>
      </div>
    </div>
    );
  }
  
  Sidebar.propTypes = {
    colorSelect: PropTypes.func.isRequired,
    categorySelect: PropTypes.func.isRequired,
    colorList: PropTypes.object.isRequired,
    getRandom: PropTypes.func.isRequired
  }

export default Sidebar;