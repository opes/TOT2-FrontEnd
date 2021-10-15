/* eslint-disable max-len */
import React, { useState } from 'react';
import SignUp from '../functional-components/SignUp';
import Login from '../functional-components/Login';
import styles from './TitlePage.css';


const TitlePage = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <div className={styles['main-container']}>
        <div
          className={!signedIn ? styles['left-container'] : styles['full-page']}
        >
          <div
            className={!signedIn ? styles['login-button'] : styles['hidden']}
          >
            <Login signedIn={signedIn} />
          </div>
          <div
            className={!signedIn ? styles['signup-button'] : styles['visible']}
          >
            <SignUp event={setSignedIn} />
          </div>
        </div>
        <div
          className={!signedIn ? styles['right-container'] : styles['hidden']}
        >
          <img src={'https://cdn.discordapp.com/attachments/852813558109569024/898648369768050699/TOT2_Logo.png'} alt="Main logo" className={styles['logo']} />
        </div>
      </div>
      <div>
        <div className={styles['fogwrapper']}>
          <div className={styles['foglayer_01']}>
            <div className="image01"></div>
          </div>
        </div>
        <div className={styles['foglayer_02']}>
          <div className="image01"></div>
        </div>
        <div className={styles['foglayer_03']}>
          <div className="image01"></div>
        </div>
      </div>
    </>
  );
};

export default TitlePage;
