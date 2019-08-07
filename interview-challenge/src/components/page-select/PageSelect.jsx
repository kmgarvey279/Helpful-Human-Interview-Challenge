import React from 'react';
import PropTypes from 'prop-types';
import './PageSelect.css';

function PageSelect(props){
  return (
    <div id="pageNumber">
      <h4 onClick={() => {props.changePage(props.page);}}>{props.page}</h4>
    </div>
    );
  }
  
  PageSelect.propTypes = {
    currentPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired
  }

export default PageSelect;
