/* eslint-disable max-len */
import React, { useState } from 'react';
import SignUp from '../functional-components/SignUp';
import styles from './TitlePage.css';

const TitlePage = () => {
  const [signedIn, setSignedIn] = useState(false);
  console.log(signedIn);
  if(signedIn) return (<div className={styles['main-container']}><SignUp event={setSignedIn} /></div>);
  return (
    <div className={styles['main-container']}>
      <div className={styles['left-container']}>
        <SignUp event={setSignedIn} state={signedIn}/>
      </div>
      <div className={styles['right-container']}></div>
    </div>
  );
};

export default TitlePage;
