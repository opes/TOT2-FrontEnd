/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { deleteUserById, getUserById, updateUserById } from '../../services/backendUtils';
import { useContextHero, useSetContextHero } from '../../hooks/HeroProvider';
import { useContextGoogleId } from '../../hooks/SessionProvider';
import { useHistory } from 'react-router';
import styles from '../container-components/VillagePage.css';

const Tavern = ({ handleVillageLocationChange }) => {

  const contextHero = useContextHero(); 
  const contextGoogleId = useContextGoogleId(); 
  const setContextHero = useSetContextHero(); 
  const history = useHistory(); 


  const handleSave = async (quit) => {
    await updateUserById(contextGoogleId, { heroStats: contextHero });
    if (quit) {
      location.replace('/');
    }
  };

  

  const handleRest = async (id) => {
    const currentUser = await getUserById(id)
    const costOfGold = currentUser.location * 2; 
    const message = confirm(`Are you sure you want to rest which costs ${costOfGold} gold`);
    if (contextHero.gold >= costOfGold && message) {
        setContextHero((prev) => ({
          ...prev,
          gold: prev.gold - costOfGold,
          STM: prev.MAXSTM, 
        }));
    } else if (contextHero.gold < costOfGold) {
      alert('You dont have enough gold...')
    } 
  }

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
          <div className={styles['viewport-button']}>
            <button onClick={() => handleSave()}>Save</button>
            <p> - Save your progress and continue playing.</p>
          </div>
          <div className={styles['viewport-button']}>
            <button onClick={() => handleSave(true)}>Save & Quit</button>
            <p> - Save your progress and quit to Title Screen.</p>
          </div>
          <div className={styles['viewport-button']}>
            <button onClick={() => handleRetire(contextGoogleId)}>
              Retire the Hero
            </button>
            <p> - Deletes ALL save progress. CANNOT BE UNDONE.</p>
          </div>
          <div>
            <button onClick={() => handleRest(contextGoogleId)}>
              Rest for the night
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
        </section>
        <section className={styles['viewport-right-bot-container']}>
          <div className={styles['text-box']}>{''}</div>
        </section>
      </section>
    </div>
  );
};

Tavern.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired,
};

export default Tavern;
