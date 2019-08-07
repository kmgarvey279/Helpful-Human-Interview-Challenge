import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

import logo from '../assets/images/logo-symbol.svg';

function Header(props){
  return (
    <div id='header'>
      <img src={logo} weight="60" height="60" alt="Helpful Human Logo"/>
    </div>
  );
}

Header.propTypes = {
  currentRouterpath: PropTypes.string.isRequired
} 

export default Header;