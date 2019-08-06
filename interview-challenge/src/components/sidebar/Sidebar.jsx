import React from 'react';
import './Sidebar.css'

function Sidebar(){
return (
  <div id="sidebar">
    <button>Random Color</button>
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

export default Sidebar;