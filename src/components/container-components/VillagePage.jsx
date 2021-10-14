/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextHero } from '../../hooks/HeroProvider';
import { useActiveSession } from '../../hooks/SessionProvider';
import Church from '../display-components/Church';
import PlayerScroll from '../display-components/PlayerScroll';
import Shop from '../display-components/Shop';
import Tavern from '../display-components/Tavern';
import styles from './VillagePage.css';
// import Login from '../functional-components/Login';

const VillagePage = () => {
  const activeSession = useActiveSession();
  const history = useHistory();
  const [villageLocation, setVillageLocation] = useState('main');
  const contextHero = useContextHero();

  if (!activeSession) history.push('/');

  const handleVillageLocationChange = ({ target }) => {
    setVillageLocation(target.value);
  };

  const handleWilderness = () => {
    const message = confirm(
      'You are about to head to the wilderness, do you want to continue?'
    );
    if (message) {
      history.push('/combat');
    }
  };
  
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
          {villageLocation === 'main' ? (
            <img
              className={styles['viewport-content']}
              src="https://cdn.discordapp.com/attachments/380989362755600394/895906508976562206/First_Town.jpg"
              alt="background"
            />
          ) : (
            <></>
          )}
          {villageLocation === 'tavern' ? (
            <Tavern handleVillageLocationChange={handleVillageLocationChange} />
          ) : (
            <></>
          )}
          {villageLocation === 'shop' ? (
            <Shop handleVillageLocationChange={handleVillageLocationChange} />
          ) : (
            <></>
          )}
          {villageLocation === 'church' ? (
            <Church handleVillageLocationChange={handleVillageLocationChange} />
          ) : (
            <></>
          )}
        </div>
        <div className={styles['village-buttons-container']}>
          <button
            className={styles['village-button']}
            value="tavern"
            onClick={(event) => handleVillageLocationChange(event)}
          >
          Tavern
          </button>
          <button
            className={styles['village-button']}
            value="church"
            onClick={(event) => handleVillageLocationChange(event)}
          >
            Church
          </button>
          <button
            className={styles['village-button']}
            value="shop"
            onClick={(event) => handleVillageLocationChange(event)}
          >
            Shop
          </button>
          <button
            className={styles['village-button']}
            onClick={handleWilderness}
          >
            Combat
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillagePage;
