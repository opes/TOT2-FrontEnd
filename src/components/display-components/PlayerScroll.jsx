import React from 'react';
import { useContextHero } from '../../hooks/HeroProvider';

const PlayerScroll = () => {
  const contextHero = useContextHero();
  
  return (
    <div>
      <ul>
        <li>Hero Type: {`${contextHero.type}`}</li>
        <li>Hero AC: {`${contextHero.AC}`}</li>
        <li>Hero ATK: {`${contextHero.ATK}`}</li>
        <li>Hero HP: {`${contextHero.HP}`}</li>
        <li>Hero MAXHP: {`${contextHero.MAXHP}`}</li>
        <li>Hero SPD: {`${contextHero.SPD}`}</li>
        <li>Hero STM: {`${contextHero.STM}`}</li>
        <li>Hero Type: {`${contextHero.XP}`}</li>
        <li>Hero XP: {`${contextHero.XP}`}</li>
        <li>Hero gold: {`${contextHero.gold}`}</li>
      </ul>
    </div>
  );
};

export default PlayerScroll;
