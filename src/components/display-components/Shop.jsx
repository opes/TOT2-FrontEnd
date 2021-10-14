import React from 'react';
import PropTypes from 'prop-types';
import { useContextHero } from '../../hooks/HeroProvider';
import styles from '../container-components/VillagePage.css';

const Shop = ({ handleVillageLocationChange }) => {

  const contextHero = useContextHero(); 


  return (
    <div className={styles['viewport-content']}>
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
