import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useContextHero } from '../../hooks/HeroProvider';
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
  const contextHero = useContextHero();

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
    <div className={styles['village-main-container']}>
      <div className={styles['left-component-playerScroll']}>
        <PlayerScroll
          type={contextHero.type}
          HP={contextHero.HP}
          STM={contextHero.STM}
          AC={contextHero.AC}
          SPD={contextHero.SPD}
          ATK={contextHero.ATK}
          level={contextHero.level}
          gold={contextHero.gold}
          XP={contextHero.XP}
        />
      </div>
      <div className={styles['right-component-village-enterties']}>
        <div className={styles['village-viewport']}>
          <div className={styles['tavern-component']}>
            <button
              value="tavern"
              onClick={(event) => handleVillageLocationChange(event)}
            >
              Tavern
            </button>
          </div>
          <div className={styles['church-component']}>
            <button
              value="church"
              onClick={(event) => handleVillageLocationChange(event)}
            >
              Church
            </button>
          </div>
          <div className={styles['shop-component']}>
            <button
              value="shop"
              onClick={(event) => handleVillageLocationChange(event)}
            >
              Shop
            </button>
          </div>
          <div className={styles['local-wilderness-component']}></div>
          <button onClick={handleWilderness}>Local Wilderness</button>
        </div>
      </div>
    </div>
  );
}

export default VillagePage;
