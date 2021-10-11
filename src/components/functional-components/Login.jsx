/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import {
  useSetActiveSession,
  useSetContextGoogleId,
} from '../../hooks/SessionProvider';
import { getUserById } from '../../services/backendUtils';
import PropTypes from 'prop-types';
import styles from  '../container-components/TitlePage.css';

const Login = ({ signedIn }) => {
  const [token, setToken] = useState();
  const setContextGoogleId = useSetContextGoogleId();
  const setActiveSession = useSetActiveSession();

  const history = useHistory(); 
  const handleLogin = async () => {
    const bckRes = await getUserById(token?.googleId);
    if (bckRes) {
      setContextGoogleId(token?.googleId);
      setActiveSession(true);
      // location.replace('/village');
      history.push('/village');
    } else {
      alert('You must create an account before logging in...');
    }
  };

  return (
    <div className={signedIn ? styles['hidden'] : styles['bloop']} style={{ zIndex: '99' }}>
      <GoogleLogin
        className={styles['button']}
        // className="button"
        clientId={process.env.CLIENT_GOOGLE_ID}
        buttonText="Login using Google"
        onSuccess={(token) => {
          setToken(token);
          handleLogin();
        }}
        onFailure={(response) => console.log(response)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

Login.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default Login;
