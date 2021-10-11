import React from 'react';
import { useContextHero } from '../../hooks/HeroProvider';
import styles from './Tutorial.css';

const Tutorial = () => {
  const contextHero = useContextHero();

  console.log(contextHero);
  return (
    <div className={styles['main-container']}>
      <section className={styles['left-container']}>
        {/* <PlayerScroll /> */} PLAYER STATS HERE
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
            TEXT LOG HERE
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
