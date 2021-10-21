/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteUserById, getUserById, updateUserById } from '../../services/backendUtils';
import { useContextHero, useSetContextHero } from '../../hooks/HeroProvider';
import { useContextGoogleId } from '../../hooks/SessionProvider';
import { useHistory } from 'react-router';
import styles from '../container-components/VillagePage.css';

const Tavern = ({ handleVillageLocationChange }) => {
  const [log, setLog] = useState([]); 
  const contextHero = useContextHero(); 
  const contextGoogleId = useContextGoogleId(); 
  const setContextHero = useSetContextHero(); 
  const history = useHistory(); 

  const handleSave = async (quit) => {
    await updateUserById(contextGoogleId, { heroStats: contextHero });
    if (quit) {
      location.replace('/');
    } else {
      setLog(prev => {
        return [...prev, 'You have saved your progress'];
      });
    }
  };

  const handleRest = async (id) => {
    const currentUser = await getUserById(id);
    const costOfGold = currentUser.location * 2; 
    const message = confirm(`Are you sure you want to rest which costs ${costOfGold} gold`);
    if (
      contextHero.STM < contextHero.MAXSTM
        && 
      contextHero.gold >= costOfGold
        &&
      message
    )
    {
      setContextHero((prev) => ({
        ...prev,
        gold: prev.gold - costOfGold,
        STM: prev.MAXSTM, 
      }));
      setLog(prev => {
        return [...prev, 'You have spent some time resting and have fully regained your stamina.'];
      });
    } else if (contextHero.gold < costOfGold) {
      alert('You dont have enough gold...');
    } else if (contextHero.STM >= contextHero.MAXSTM) {
      alert('You dont need to rest');
    }
  };

  const handleRetire = async (id) => {
    const message = confirm('Are you sure you want to retire hero?\nAll your progress will be deleted!!');
    if (!id) throw new Error('Invalid Id...');
    if (message && id) {
      const deletionMessage = await deleteUserById(id);
      alert(deletionMessage.message);
      history.push('/');
    }
  };

  return (
    <div className={styles['viewport-content']}>
      <section className={styles['viewport-left-container']}>
        <img
          className={styles['tavern-viewport-image']}
          src="https://cdn.discordapp.com/attachments/380989362755600394/898308608922628107/Untitled_Artwork.jpg"
          alt="tavern"
        />
      </section>
      <section className={styles['viewport-right-container']}>
        <section className={styles['viewport-right-top-container']}>
          <div className={styles[ 'tavern-viewport-background' ]}>
            <div className={styles['grey-screen']}>
              <div className={styles['viewport-button']}>
                <button onClick={() => handleSave()}>Save- Save your progress and continue playing.</button>
              </div>
              <div className={styles['viewport-button']}>
                <button onClick={() => handleSave(true)}>Save & Quit - Save your progress and quit to Title Screen.</button>
              </div>
              <div className={styles['viewport-button']}>
                <button onClick={() => handleRetire(contextGoogleId)}>
              Retire the Hero - Deletes ALL save progress. CANNOT BE UNDONE.
                </button>
              </div>
              <div className={styles['viewport-button']}>
                <button onClick={() => handleRest(contextGoogleId)}>
              Rest for the night - Rest and regain your stamina.
                </button>
              </div>
              <div className={styles['viewport-button']}>
                <button
                  onClick={(event) => handleVillageLocationChange(event)}
                  value="main"
                >
              Go back to Village
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['viewport-right-bot-container']}>
          <div className={styles['text-box']}>{
            log.map((single, idx) => {
              return <p key={idx}> {single} </p>;
            })
          }</div>
        </section>
      </section>
    </div>
  );
};

Tavern.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired,
};

export default Tavern;
