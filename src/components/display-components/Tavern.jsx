/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { deleteUserById, updateUserById } from '../../services/backendUtils';
import { useContextHero } from '../../hooks/HeroProvider';
import { useContextGoogleId } from '../../hooks/SessionProvider';
import { useHistory } from 'react-router';
import styles from '../container-components/VillagePage.css';

const Tavern = ({ handleVillageLocationChange }) => {

  const contextHero = useContextHero(); 
  const contextGoogleId = useContextGoogleId(); 
  const history = useHistory(); 

  const handleSave = async (quit) => {
    await updateUserById(contextGoogleId, { heroStats: contextHero });
    if (quit) {
      location.replace('/');
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
        <img className={styles['tavern-viewport-image']} src="https://cdn.discordapp.com/attachments/380989362755600394/898308608922628107/Untitled_Artwork.jpg" alt="tavern"/>
      </section>
      <section className={styles['viewport-right-container']}>
        <button onClick={() => handleSave()}>Save</button>
        <button onClick={() => handleSave(true)}>Save & Quit</button>
        <button
          onClick={(event) => handleVillageLocationChange(event)}
          value="main"
        >
        Go back to Village
        </button>
        <button onClick={() => handleRetire(contextGoogleId)}>
        Retire the Hero
        </button>
      </section>
    </div>
  );
};

Tavern.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired,
};

export default Tavern;
