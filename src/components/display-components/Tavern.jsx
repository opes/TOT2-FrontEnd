import React from 'react';
import PropTypes from 'prop-types';

const Tavern = ({ handleVillageLocationChange }) => {

  return (
    <div>
      Tavern
      <button
        onClick={(event) => handleVillageLocationChange(event)}
        value="main"
      >
        Go back to Village
      </button>
    </div>
  );
};

Tavern.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired,
};

export default Tavern;
