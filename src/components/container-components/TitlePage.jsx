/* eslint-disable max-len */
import React, { useState } from 'react';
import SignUp from '../functional-components/SignUp';
import styles from './TitlePage.css';

const TitlePage = () => {
  const [signedIn, setSignedIn] = useState(false);
  console.log(signedIn);
  // if (signedIn) return (<div className={styles[ 'main-container' ]}>
  //   <SignUp event={setSignedIn} />
  // </div>);
  return (
    <div className={styles['main-container']}>
      <div className={!signedIn ? styles['left-container'] : styles['full-page']}>
        <SignUp event={setSignedIn} />
      </div>
      <div className={!signedIn ? styles['right-container'] : styles['hidden']}></div>
    </div>
  );
};

export default TitlePage;
