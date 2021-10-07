/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';


const SignUp = ({ event, state }) => {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [googleId, setGoogleId] = useState();
  const [hero, setHero] = useState();

  useEffect(() => {
    setGoogleId(token?.googleId);
    const protoUsername = `${token?.profileObj.givenName}${token?.profileObj.familyName[0]}`;
    setUsername(protoUsername);
  }, [token]);

  const onSubmit = async () => {
    // this is where we create a userObject to be posted to the backend.
    // this also redirects the user to the first CUTSCENE after their userObject has been added to the database.
    // this is the start of the app.
  };

  if(!token) return <GoogleLogin className="button"
    clientId={process.env.CLIENT_GOOGLE_ID}
    buttonText="Signup using Google"
    onSuccess={ (token) => {setToken(token); event(!state);} }
    onFailure={ (response) => console.log(response)}
    cookiePolicy={'single_host_origin'}
  />;
  return (
    <div>
      <form>
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="radio" name="hero" />
        <input type="radio" name="hero" />
        <input type="radio" name="hero" />
        <input type="radio" name="hero" />
        <button>Start the Adventure</button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  event: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};

export default SignUp;
