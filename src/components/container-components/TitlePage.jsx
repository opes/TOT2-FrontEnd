/* eslint-disable max-len */
import React from 'react';
import SignUp from '../functional-components/SignUp';
import styles from './TitlePage.css';

const TitlePage = () => {
  return (
    <div className={styles['main-container']}>
      <div className={styles['left-container']}>
        <SignUp />
      </div>
      <div className={styles['right-container']}></div>
    </div>
  );
};

export default TitlePage;
