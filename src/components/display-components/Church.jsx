import React from 'react';
import PropTypes from 'prop-types';
import { useContextHero, useSetContextHero } from '../../hooks/HeroProvider';
import { heroesLevelUp } from '../../data/hero-templates';
import { useContextGoogleId } from '../../hooks/SessionProvider';
import { getUserById } from '../../services/backendUtils';
import styles from '../container-components/VillagePage.css';

const Church = ({ handleVillageLocationChange }) => {
  const contextHero = useContextHero();
  const contextGoogleId = useContextGoogleId();
  const setContextHero = useSetContextHero();

  const handleLevelUp = () => {
    const heroType = heroesLevelUp[`${contextHero.type}LevelUp`];
    const neededXP = 5 + 10 * contextHero.level;

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
            gold: prevHero.gold,
            XP: prevHero.XP - neededXP,
          };
        });
      }
    } else {
      alert('You do not have enough XP to level up...');
    }
  };

  const hanldeHeal = async () => {
    const { heroStats } = await getUserById(contextGoogleId);
    if (
      contextHero.HP < heroStats.MAXHP && contextHero.XP >= 0
    ) {
      const message = confirm('Are you sure you want to get healed?');
      if (message) {
        setContextHero((prevHero) => ({
          ...prevHero,
          HP: heroStats.MAXHP,
          XP: contextHero.XP - (5 * heroStats.level),
        }));
      }
    } else if (contextHero.XP <= 0) {
      alert('Cannot heal, lack of XP');
    } else if (contextHero.HP >= heroStats.MAXHP) {
      alert('You are too healthy no need to heal');
    }
  };

  return (
    <div className={styles['viewport-content']}>
      Church
      <button onClick={hanldeHeal}> Heal </button>
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

export default Church;
