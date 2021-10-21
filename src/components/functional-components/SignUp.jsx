/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { heroes } from '../../data/hero-templates';
import { createUser, getUserById } from '../../services/backendUtils';
import { useSetActiveSession, useSetContextGoogleId } from '../../hooks/SessionProvider';
import styles from './SignUp.css';
import dwarf from '../../assets/dwarf.png';
import fox from '../../assets/fox.png';
import devilkin from '../../assets/devilkin.png';
import vampire from '../../assets/vampire.png';

const { dwarfWarrior, foxArcher, devilkinMage, vampireRonin } = heroes;

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

  const handleSignup = async (id) => {
    const bckRes = await getUserById(id);

    // How can you handle this error more gracefully? What about changing the error message that comes from the backend?
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
      clientId={process.env.REACT_APP_CLIENT_GOOGLE_ID}
      buttonText="Signup using Google"
      onSuccess={(token) => {
        setToken(token); event(true);
        handleSignup(token?.googleId);
      }}
      onFailure={ (response) => console.log(response)} {/* TODO: Handle signup failure */}
      cookiePolicy={'single_host_origin'}
    />
  </div>;
  return (
    <div className={styles['hero-form']}>
      <form onSubmit={onSubmit} className={styles[ 'form-container' ]}>
        <div className={styles['label-background']}>
          <label className={styles['username-label']}>
            Username
            <input
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
        </div>
        <div className={styles['radio-buttons']}>
          <label htmlFor="dwarf">
            <input
              className={styles['input-display']}
              type="radio"
              name="hero"
              value="dwarfWarrior"
              id="dwarf"
              onChange={
                ({ target }) => setHero(target.value)
              }/>
            <div className={styles['hero-container']}>
              <img
                className={styles['hero-icon']}
                src={dwarf}
                alt="dwarf"
              />
              <section className={styles['hero-text']}>
                <h2>Dwarf Warrior</h2>
                <div>
                  <p>Health Points: {dwarfWarrior.HP}</p>
                  <p>Stamina: {dwarfWarrior.STM}</p>
                  <p>Armor Class: {dwarfWarrior.AC}</p>
                  <p>Speed: {dwarfWarrior.SPD}</p>
                  <p>Attack: {dwarfWarrior.ATK}</p>
                </div>
              </section>
            </div>
          </label>
          <label htmlFor="fox">
            <input
              className={styles['input-display']}
              type="radio"
              name="hero"
              value="foxArcher"
              id="fox"
              onChange={
                ({ target }) => setHero(target.value)
              }
            />
            <div className={styles['hero-container']}>
              <img
                className={styles['hero-icon']}
                src={fox}
                alt="fox"
              />
              <section className={styles['hero-text']}>
                <h2>Fox Archer</h2>
                <div>
                  <p>Health Points: {foxArcher.HP}</p>
                  <p>Stamina: {foxArcher.STM}</p>
                  <p>Armor Class: {foxArcher.AC}</p>
                  <p>Speed: {foxArcher.SPD}</p>
                  <p>Attack: {foxArcher.ATK}</p>
                </div>
              </section>
            </div>
          </label>
          <label htmlFor="devilkin">
            <input
              className={styles['input-display']}
              type="radio"
              name="hero"
              value="devilkinMage"
              id="devilkin"
              onChange={
                ({ target }) => setHero(target.value)
              }
            />
            <div className={styles['hero-container']}>
              <img
                className={styles['hero-icon']}
                src={devilkin}
                alt="devilkin"
              />
              <section className={styles['hero-text']}>
                <h2>Devilkin Mage</h2>
                <div>
                  <p>Health Points: {devilkinMage.HP}</p>
                  <p>Stamina: {devilkinMage.STM}</p>
                  <p>Armor Class: {devilkinMage.AC}</p>
                  <p>Speed: {devilkinMage.SPD}</p>
                  <p>Attack: {devilkinMage.ATK}</p>
                </div>
              </section>
            </div>
          </label>
          <label htmlFor="vampire">
            <input
              className={styles['input-display']}
              type="radio"
              name="hero"
              value="vampireRonin"
              id="vampire"
              onChange={
                ({ target }) => setHero(target.value)
              }
            />
            <div className={styles['hero-container']}>
              <img
                className={styles['hero-icon']}
                src={vampire}
                alt="vampire"
              />
              <section className={styles['hero-text']}>
                <h2>Vampire Ronin</h2>
                <div>
                  <p>Health Points: {vampireRonin.HP}</p>
                  <p>Stamina: {vampireRonin.STM}</p>
                  <p>Armor Class: {vampireRonin.AC}</p>
                  <p>Speed: {vampireRonin.SPD}</p>
                  <p>Attack: {vampireRonin.ATK}</p>
                </div>
              </section>
            </div>
          </label>
        </div>
        <button className={styles['form-button']}>
              Start the Adventure
        </button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  event: PropTypes.func.isRequired,
};

export default SignUp;
