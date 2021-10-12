import React from 'react';
import PropTypes from 'prop-types'
import { useContextHero, useSetContextHero } from '../../hooks/HeroProvider';
import { heroesLevelUp } from '../../data/hero-templates';

const Church = ({ handleVillageLocationChange }) => {

  const contextHero = useContextHero();
  const setContextHero = useSetContextHero(); 

  const handleLevelUp = () => {

    const heroType = heroesLevelUp[`${contextHero.type}LevelUp`];
    const neededXP = 5 + (10 * contextHero.level)
    if (contextHero.XP >= neededXP) { 
      const message = confirm(`Do you want to level up? [${neededXP} xp]`);
      if (message) {
        setContextHero((prevHero) => {
          return {
            HP: prevHero.HP + heroType?.HP,
            STM: prevHero.STM + heroType?.STM,
            SPD: prevHero.SPD + heroType?.SPD,
            ATK: prevHero.ATK + heroType?.ATK,
            level: prevHero.level + heroType?.level,
            XP: prevHero.XP - neededXP,
          };
        });
      }
    }
    else {
      alert('You do not have enough XP to level up...')
    }
  }

  return (
    <div>
      Church
      <button> Heal </button>
      <button onClick={handleLevelUp}> Level Up </button>
      <button
        onClick={(event) => handleVillageLocationChange(event)}
        value="main"
      >
        Go back to Village
      </button>
    </div>
  );
};


Church.propTypes = {
  handleVillageLocationChange: PropTypes.func.isRequired, 
};


export default Church
