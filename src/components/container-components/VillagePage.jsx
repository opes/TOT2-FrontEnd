import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useActiveSession } from '../../hooks/SessionProvider';
import Church from '../display-components/Church';
import Shop from '../display-components/Shop';
import Tavern from '../display-components/Tavern';

const VillagePage = () => {
  const activeSession = useActiveSession();
  const history = useHistory(); 
  const [villageLocation, setVillageLocation] = useState('main'); 
  if (!activeSession) history.push('/'); 
  
  const handleVillageLocationChange = ({ target }) => {
    setVillageLocation(target.value);
  }

  if (villageLocation === 'tavern') {
    <Tavern />
  } else if (villageLocation === 'shop') {
    <Shop />
  } else if (villageLocation === 'church') {
    <Church />
  }
  
  return (
    <div>
      {villageLocation}
      <button
        value="tavern"
        onClick={(event) => handleVillageLocationChange(event)}
      >
        Tavern
      </button>
      <button
        value="church"
        onClick={(event) => handleVillageLocationChange(event)}
      >
        Church
      </button>
      <button
        value="shop"
        onClick={(event) => handleVillageLocationChange(event)}
      >
        Shop
      </button>
    </div>
  );
}

export default VillagePage

// Create a main locaiton
  // 3 functions for each buttion
  // if else => 
  // create four buttons => tavern, chrunch, shop