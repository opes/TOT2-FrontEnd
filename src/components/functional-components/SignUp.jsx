/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { heroes } from '../../data/hero-templates';
import { createUser, getUserById } from '../../services/backendUtils';
import { useSetActiveSession, useSetContextGoogleId } from '../../hooks/SessionProvider';
import styles from './SignUp.css';
import dwarfWarrior from '../../assets/Dwarf Warrior.png';
import foxArcher from '../../assets/FoxArcher.png';
import devilkin from '../../assets/devilkin.png';
import vampire from '../../assets/vampire.png';
import parchment from '../../assets/parchement2.png';



const SignUp = ({ event }) => {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [googleId, setGoogleId] = useState();
  const [selectedHero, setSelectedHero] = useState(true);
  const [hero, setHero] = useState();
  const setContextGoogleId = useSetContextGoogleId();
  const setActiveSession = useSetActiveSession();
  const history = useHistory(); 

  useEffect(() => {
    setGoogleId(token?.googleId);
    const protoUsername = `${token?.profileObj.givenName}${token?.profileObj.familyName[0]}`;
    setUsername(protoUsername);
  }, [token]);

  const handleSignup = async (id) => {
    const bckRes = await getUserById(id);
    console.log(bckRes);
    if (
      bckRes.message ===
        'null value in column "google_id" of relation "users" violates not-null constraint' ||
      typeof bckRes.googleId === 'string'
    ) {
      alert('You have an account, please use login to log in...');
      location.replace('/');
    }
  };

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
    <GoogleLogin
      className={styles['button']}
      // className="button"
      clientId={process.env.CLIENT_GOOGLE_ID}
      buttonText="Signup using Google"
      onSuccess={(token) => {
        setToken(token); event(true);
        handleSignup(token?.googleId);
      }}
      onFailure={ (response) => console.log(response)}
      cookiePolicy={'single_host_origin'}
    />
  </div>;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${parchment})`, backgroundRepeat: 'no-repeat' }}
        className={styles[ 'parchment' ]}>
        <div className={styles[ 'hero-form' ]}>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={username}
              onChange={
                ({ target }) => setUsername(target.value)
              } />
            <div className={styles['radio-buttons']}>
              <label htmlFor="dwarf">
                <img
                  className={styles[ 'hero-icon' ]}
                  src={dwarfWarrior}
                  alt="dwarf" />
          Dwarf Warrior
                <input
                  className={styles[ 'input-display' ]} type="radio"
                  name="hero"
                  value="dwarfWarrior"
                  checked={selectedHero === 'dwarfWarrior'}
                  id="dwarf"
                  onChange={({ target }) => setHero(target.value),
                  ({ target }) => setSelectedHero(target.value)}
                />
              </label>
              <label htmlFor="fox">
                <img
                  className={styles['hero-icon']}
                  src={foxArcher}
                  alt="fox"
                />
          Fox Archer
                <input
                  className={styles[ 'input-display' ]} type="radio"
                  name="hero"
                  value="foxArcher"
                  checked={selectedHero === 'foxArcher'}
                  id="fox"
                  onChange={({ target }) => setHero(target.value),
                  ({ target }) => setSelectedHero(target.value)}
                />
              </label>
              <label htmlFor="devilkin">
                <img
                  className={styles[ 'hero-icon' ]}
                  src={devilkin}
                  alt="devilkin" />
          Devilkin Mage
                <input
                  className={styles[ 'input-display' ]} type="radio"
                  name="hero"
                  value="devilkinMage"
                  checked={selectedHero === 'devilkinMage'}
                  id="devilkin"
                  onChange={({ target }) => setHero(target.value),
                  ({ target }) => setSelectedHero(target.value)}
                />
              </label>
              <label htmlFor="vampire">
                <img
                  className={styles[ 'hero-icon' ]}
                  src={vampire}
                  alt="vampire" />
          Vampire Ronin
                <input
                  className={styles[ 'input-display' ]} type="radio"
                  name="hero"
                  value="vampireRonin"
                  checked={selectedHero === 'vampireRonin'}
                  id="vampire"
                  onChange={({ target }) => setHero(target.value),
                  ({ target }) => setSelectedHero(target.value)}
                />
              </label>
            </div>
            <button className={styles[ 'form-button' ]}>
          Start the Adventure
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

SignUp.propTypes = {
  event: PropTypes.func.isRequired,
};

export default SignUp;
