/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { heroes } from '../../data/hero-templates';
import { createUser } from '../../services/backendUtils';
import { useSetActiveSession, useSetContextGoogleId } from '../../hooks/SessionProvider';


const SignUp = ({ event }) => {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [googleId, setGoogleId] = useState();
  const [hero, setHero] = useState();
  const setContextGoogleId = useSetContextGoogleId();
  const setActiveSession = useSetActiveSession();
  const history = useHistory(); 

  useEffect(() => {
    setGoogleId(token?.googleId);
    const protoUsername = `${token?.profileObj.givenName}${token?.profileObj.familyName[0]}`;
    setUsername(protoUsername);
  }, [token]);


  const onSubmit = async (event) => {
    event.preventDefault();
    const userObject = {
      googleId,
      username,
      score: 0,
      heroStats: heroes[hero],
      heldGear: [],
      items: [],
      achievements: [''],
      location: 1,
    };
    await createUser(userObject);
    setContextGoogleId(googleId);
    setActiveSession(true);
    history.push('/cutscene');
  };

  if (!token) return <div style={{ zIndex: '99' }}>
    <GoogleLogin className="button"
      clientId={process.env.CLIENT_GOOGLE_ID}
      buttonText="Signup using Google"
      onSuccess={ (token) => {setToken(token); event(true);} }
      onFailure={ (response) => console.log(response)}
      cookiePolicy={'single_host_origin'}
    />
  </div>;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        {/* Images and more styling for the choices of heroes */}
        <label htmlFor="dwarf">
          Dwarf Warrior
          <input type="radio" name="hero" value="dwarfWarrior" id="dwarf" onChange={({ target }) => setHero(target.value)}/>
        </label>
        <label htmlFor="fox">
          Fox Archer
          <input type="radio" name="hero" value="foxArcher" id="fox" onChange={({ target }) => setHero(target.value)}/>
        </label>
        <label htmlFor="devilkin">
          Devilkin Mage
          <input type="radio" name="hero" value="devilkinMage" id="devilkin" onChange={({ target }) => setHero(target.value)}/>
        </label>
        <label htmlFor="vampire">
          Vampire Ronin
          <input type="radio" name="hero" value="vampireRonin" id="vampire" onChange={({ target }) => setHero(target.value)}/>
        </label>
        <button>Start the Adventure</button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  event: PropTypes.func.isRequired,
};

export default SignUp;
