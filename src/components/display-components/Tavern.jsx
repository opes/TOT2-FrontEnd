import React from 'react';
import PropTypes from 'prop-types';
import { updateUserById } from '../../services/backendUtils';
import { useContextHero } from '../../hooks/HeroProvider';
import { useContextGoogleId } from '../../hooks/SessionProvider';


const Tavern = ({ handleVillageLocationChange }) => {

  const contextHero = useContextHero(); 
  const contextGoogleId = useContextGoogleId(); 
  
  const handleSave = async (quit) => {
    const updatedUser = await updateUserById(contextGoogleId, {heroStats: contextHero});
  
    if (quit) {
      location.replace('/')
    }
  }

  return (
    <div>
      Tavern
      <button onClick={() => handleSave()}>Save</button>
      <button onClick={() => handleSave(true)}>Save & Quit</button>
      <button
        onClick={(event) => handleVillageLocationChange(event)}
        value="main"
      >
        Go back to Village
      </button>
    </div>
  );
};

Tavern.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired,
};

export default Tavern;
