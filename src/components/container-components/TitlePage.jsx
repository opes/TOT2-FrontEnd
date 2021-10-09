/* eslint-disable max-len */
import React, { useState } from 'react';
import SignUp from '../functional-components/SignUp';
import Login from '../functional-components/Login';
import styles from './TitlePage.css';
// import fogStyles from '../../styles/fog.css';

const TitlePage = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <div className={styles[ 'main-container']}>
        <div className={!signedIn ? styles[ 'left-container' ] : styles[ 'full-page' ]}>
          <SignUp event={setSignedIn} />
        </div>
        <div className={!signedIn ? styles[ 'right-container' ] : styles[ 'hidden' ]}>
        </div>
      </div>
      <div>
        <div className={styles['fogwrapper']}>
          <div className={styles['foglayer_01']}>
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
        </div>
        <div className={styles['foglayer_02']}>
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div className={styles['foglayer_03']}>
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
      </div>
    </>
  );
};

export default TitlePage;
