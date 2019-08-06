import React from 'react';
import './Sidebar.css'
import PropTypes from 'prop-types';

function Sidebar(props){
  return (
    <div id="sidebar">
      <button onClick={() => {props.colorSelect(props.getRandom());}}>Random Color</button>
      <div id="colors">
        <h4>Red</h4>
        <h4>Orange</h4>
        <h4>Yellow</h4>
        <h4>Green</h4>
        <h4>Blue</h4>
        <h4>Purple</h4>
        <h4>Brown</h4>
        <h4>Gray</h4>
      </div>
    </div>
    );
  }
  
  Sidebar.propTypes = {
    colorSelect: PropTypes.func.isRequired,
    colorList: PropTypes.object.isRequired,
    getRandom: PropTypes.func.isRequired
  }

export default Sidebar;