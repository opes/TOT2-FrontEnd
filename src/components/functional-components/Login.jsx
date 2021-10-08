import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import {
  useSetActiveSession,
  useSetContextGoogleId,
} from '../../hooks/SessionProvider';
import { getUserById } from '../../services/backendUtils';

const Login = () => {
  const [token, setToken] = useState();
  const setContextGoogleId = useSetContextGoogleId();
  const setActiveSession = useSetActiveSession();

  const handleLogin = async () => {
    const bckRes = await getUserById(token?.googleId);
    if (bckRes) {
      setContextGoogleId(token?.googleId);
      setActiveSession(true);
      location.replace('/village');
    } else {
      alert('You must create an account before logging in...');
    }
  };

  return (
    <div>
      <GoogleLogin
        className="button"
        clientId={process.env.CLIENT_GOOGLE_ID}
        buttonText="Login using Google"
        onSuccess={(token) => {
          setToken(token);
          handleLogin();
        }}
        onFailure={(response) => console.log(response)}
        cookiePolicy={'single_host_origin'}
      />
      ;
    </div>
  );
};

export default Login;
