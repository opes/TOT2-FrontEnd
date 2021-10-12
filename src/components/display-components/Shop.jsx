import React from 'react';
import PropTypes from 'prop-types';

const Shop = ({ handleVillageLocationChange }) => {
  return (
    <div>
      Shop
      <button
        onClick={(event) => handleVillageLocationChange(event)}
        value="main"
      >
        Go back to Village
      </button>
    </div>
  );
};

Shop.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired,
};

export default Shop;
