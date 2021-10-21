/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import { useContextHero, useSetContextHero } from '../../hooks/HeroProvider';
import { useActiveSession } from '../../hooks/SessionProvider';
import { enemyList } from '../../data/enemy-list.js';
import useCombatHook from '../../hooks/useCombatHook';
import styles from './CombatPage.css';
import PlayerScroll from '../display-components/PlayerScroll';
import dwarf from '../../assets/dwarf.png';
import fox from '../../assets/fox.png';
import devilkin from '../../assets/devilkin.png';
import vampire from '../../assets/vampire.png';

const CombatPage = () => {
  const activeSession = useActiveSession();
  const contextHero = useContextHero();
  const setContextHero = useSetContextHero();
  const history = useHistory();
  const {
    player,
    enemy,
    activeCombat,
    combatLog,
    doOneCombatRound,
    doFlee,
    doAdditionalFight
  } = useCombatHook(contextHero, enemyList);


  const handleReturnToVillage = () => {
    setContextHero(player);
    history.push('/village');
  };

  if (!activeSession) history.push('/');

  const imgSrc = { dwarf, fox, devilkin, vampire };

  return (
    <div className={styles['main-container']}>
      <section className={styles[ 'left-container' ]}>
        <div className={styles['scroll-content']}>
          <PlayerScroll
            type={player.type}
            HP={player.HP}
            STM={player.STM}
            AC={player.AC}
            SPD={player.SPD}
            ATK={player.ATK}
            level={player.level}
            gold={player.gold}
            XP={player.XP}
          />
        </div>
      </section>
      <section className={styles['right-container']}>
        <div className={styles['top-right-container']}></div>
        <div className={styles[ 'middle-right-container' ]}>
          <div className={styles[ 'middle-right-content' ]}>
            <img src={imgSrc[player.type]} className={styles['hero-sprite']} alt="player-sprite"/>
            <img src={enemy.img} className={styles[`${enemy.name}`]} alt={enemy} />
          </div>
        </div>
        <div className={styles['bot-right-container']}>
          <div className={styles['left-bot-right-container']}>
            <section className={styles['combat-buttons']}>
              <button
                onClick={doOneCombatRound}
                className={!activeCombat ? styles['hidden'] : styles['bloop']}
              >
                Attack
              </button>
              <button
                onClick={() => {
                  const flee = doFlee();
                  if (flee) {
                    setContextHero(player);
                    history.push('/village');
                  }
                }}
                className={!activeCombat ? styles['hidden'] : styles['bloop']}
              >
                Flee
              </button>
              <button
                className={activeCombat ? styles['hidden'] : styles['bloop']}
                onClick={() => doAdditionalFight()}
              >
                Fight More
              </button>
              <button
                className={activeCombat ? styles['hidden'] : styles['bloop']}
                onClick={() => handleReturnToVillage()}
              >
                To Village
              </button>
            </section>
            <section className={styles['combat-log']}>
              {combatLog.map((single, i) => (
                <p key={i}> {single} </p>
              ))}
            </section>
          </div>
          <div className={styles['right-bot-right-container']}>
            <div className={styles['enemy-stats']}>
              <h2>{enemy?.name}</h2>
              <p>Health Points: {enemy?.HP}</p>
              <p>Armor Class: {enemy?.AC}</p>
              <p>Speed: {enemy?.SPD}</p>
              <p>Attack: {enemy?.ATK}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombatPage;
