import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useActiveSession } from '../../hooks/SessionProvider';
import Church from '../display-components/Church';
import PlayerScroll from '../display-components/PlayerScroll';
import Shop from '../display-components/Shop';
import Tavern from '../display-components/Tavern';
// import Login from '../functional-components/Login';


const VillagePage = () => {
  const activeSession = useActiveSession();
  const history = useHistory(); 
  const [villageLocation, setVillageLocation] = useState('main'); 

  if (!activeSession) history.push('/'); 

  const handleVillageLocationChange = ({ target }) => {
    setVillageLocation(target.value);
  }

  const handleWilderness = () => {
    const message = confirm('You are about to head to the wilderness, do you want to continue?')
    if (message) {
      history.push('/combat')
    }
  }

  if (villageLocation === 'tavern')
    return (<Tavern handleVillageLocationChange={handleVillageLocationChange} />);
  
  if (villageLocation === 'shop')
    return (<Shop handleVillageLocationChange={handleVillageLocationChange} />);
  
  if (villageLocation === 'church')
    return (<Church handleVillageLocationChange={handleVillageLocationChange} />);
  
  
  return (
    <>
      <div className="left-component-playerScroll">
        <PlayerScroll />
      </div>
      <div className="right-component-village-enterties">
        <div className="tavern-component">
          <button
            value="tavern"
            onClick={(event) => handleVillageLocationChange(event)}
          >
            Tavern
          </button>
        </div>
        <div className="church-component">
          <button
            value="church"
            onClick={(event) => handleVillageLocationChange(event)}
          >
            Church
          </button>
        </div>
        <div className="shop-component">
          <button
            value="shop"
            onClick={(event) => handleVillageLocationChange(event)}
          >
            Shop
          </button>
        </div>
        <div className="local-wilderness-component">
          <button onClick={handleWilderness}>Local Wilderness</button>
        </div>
      </div>
    </>
  );
}

export default VillagePage;
