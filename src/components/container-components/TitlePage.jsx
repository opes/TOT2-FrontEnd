/* eslint-disable max-len */
import React, { useState } from 'react';
import SignUp from '../functional-components/SignUp';
import styles from './TitlePage.css';

const TitlePage = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div className={styles[ 'main-container' ]}>
      <div id="foglayer_01" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div className={!signedIn ? styles['left-container'] : styles['full-page']}>
        <SignUp event={setSignedIn} />
      </div>
      <div className={!signedIn ? styles[ 'right-container' ] : styles[ 'hidden' ]}>
      </div>
    </div>
  );
};

export default TitlePage;
