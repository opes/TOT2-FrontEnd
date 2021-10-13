import React from 'react';
import { useHistory } from 'react-router';
import { useContextHero, useSetContextHero } from '../../hooks/HeroProvider';
import { useActiveSession } from '../../hooks/SessionProvider';
import { enemyList } from '../../data/enemy-list.js';
import useCombatHook from '../../hooks/useCombatHook';
import styles from './CombatPage.css'
import PlayerScroll from '../display-components/PlayerScroll';

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
    loading,
    doOneCombatRound,
    doFlee,
  } = useCombatHook(contextHero, enemyList);

  const handleReturnToVillage = () => {
    setContextHero(player);
    history.push('/village');
  };

  if (!activeSession) history.push('/');
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles['main-container']}>
      <section className={styles['left-container']}>
        <PlayerScroll />
        {/* {player?.type}
        {player?.HP}
        {player?.STM}
        {player?.AC}
        {player?.SPD}
        {player?.ATK}
        {player?.level}
        {player?.gold}
        {player?.XP} */}
      </section>
      <section className={styles['right-container']}>
        <div className={styles['top-right-container']}>ITEMS GO HERE</div>
        <div className={styles['middle-right-container']}>PICTURES GO HERE</div>
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
            ENEMY STATS HERE
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombatPage;
