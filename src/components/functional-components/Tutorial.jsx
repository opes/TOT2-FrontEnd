/* eslint-disable max-len */
import React from 'react';
import { useContextHero, useSetContextHero } from '../../hooks/HeroProvider';
import useCombatHook from '../../hooks/useCombatHook';
import grabRandomEnemy from '../../services/grabRandomEnemy';
import styles from './Tutorial.css';

const Tutorial = () => {
  const contextHero = useContextHero();
  const setContextHero = useSetContextHero();
  const wtvEnemy = grabRandomEnemy(contextHero.level);
  const { player, enemy, activeCombat, combatLog, doOneCombatRound } = useCombatHook(contextHero, wtvEnemy);


  return (
    <div className={styles['main-container']}>
      <section className={styles['left-container']}>
        {/* <PlayerScroll /> */}
        {player.type}
        {player.HP}
        {player.STM}
        {player.AC}
        {player.SPD}
        {player.ATK}
        {player.level}
        {player.gold}
        {player.XP}
      </section>
      <section className={styles['right-container']}>
        <div className={styles['top-right-container']}>
          ITEMS GO HERE
        </div>
        <div className={styles['middle-right-container']}>
          PICTURES GO HERE
        </div>
        <div className={styles['bot-right-container']}>
          <div className={styles['left-bot-right-container']}>
            {combatLog.map(single => <p key={single}> {single} </p>)}
          </div>
          <div className={styles['right-bot-right-container']}>
            ENEMY STATS HERE
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorial;
