import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useSetActiveSession, useSetContextGoogleId } from '../../hooks/SessionProvider';
import { getUserById } from '../../services/backendUtils';

const Login = () => {
  const [token, setToken] = useState();
  const setContextGoogleId = useSetContextGoogleId();
  const setActiveSession = useSetActiveSession();
  
  // a userEffect token change
  useEffect(() => { 
    getUserById(token?.googleId)
      .then((bckRes) => {
        bckRes ?
          (
            setContextGoogleId(token?.googleId),
            setActiveSession(true), 
            location.replace('/village')
          )
          :
          alert('You must create an account before logging in...')
      });
  }, [token]
  )


  return (
    <div>
      <GoogleLogin
        className="button"
        clientId={process.env.CLIENT_GOOGLE_ID}
        buttonText="Login using Google"
        onSuccess={(token) => { 
          setToken(token); 
          // setContextGoogleId(token?.googleId);
          // setActiveSession(true);
          // location.replace('/village')
        }}
        onFailure={(response) => console.log(response)}
        cookiePolicy={'single_host_origin'}
      />
      ;
    </div>
  );
}

export default Login
