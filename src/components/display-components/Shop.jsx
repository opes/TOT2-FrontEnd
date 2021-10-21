/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../container-components/VillagePage.css';

const Shop = ({ handleVillageLocationChange }) => (
  <div className={styles['viewport-content']}>
    <section className={styles['viewport-left-container']}>
      <img
        className={styles['shop-viewport-image']}
        src="https://cdn.discordapp.com/attachments/380989362755600394/898328701501046784/Untitled_Artwork.jpg"
        alt="shop"
      />
    </section>
    <section className={styles['viewport-right-container']}>
      <section className={styles['viewport-right-top-container']}>
        <div className={styles['shop-viewport-background']}>
          <div className={styles['grey-screen']}>
            <div className={styles['viewport-button']}>
              <button
                onClick={(event) => handleVillageLocationChange(event)}
                value="main"
              >
                Go back to Village
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['viewport-right-bot-container']}>
        <div className={styles['text-box']}>
          {
            'The Shop lies boarded up and unused. Perhaps a merchant can be found to setup in this building.'
          }
        </div>
      </section>
    </section>
  </div>
);

Shop.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired,
};

export default Shop;
