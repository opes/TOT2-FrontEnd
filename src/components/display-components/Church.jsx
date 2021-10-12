import React from 'react'
import PropTypes from 'prop-types'


const Church = ({ handleVillageLocationChange }) => {

  return (
    <div>
      Church
      <button onClick={(event) => handleVillageLocationChange(event)}
      value='main'
      >
        Go back to Village
      </button>
    </div>
  );
};


Church.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired, 
};


export default Church
