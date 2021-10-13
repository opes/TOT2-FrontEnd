/* eslint-disable max-len */
import React from 'react';
import styles from './PlayerScroll.css';

const PlayerScroll = () => {
  return (
    <>
      <div className={styles['scroll']}>
        <img src={'https://cdn.discordapp.com/attachments/380989362755600394/897640905627037787/image0.jpg'} alt="devilkin portait" className={styles['portrait']}/>
        <div className={styles['stats']}>
        Player stats here! 
        </div>
      </div>
    </>
  );
};

export default PlayerScroll;
