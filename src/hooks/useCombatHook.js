/* eslint-disable max-len */
import { useState, useEffect } from 'react';

const useCombatHook = (combat1, combat2) => {
  const [player, setPlayer] = useState(combat1);
  const [enemy, setEnemy] = useState(combat2);
  const [activeCombat, setActiveCombat] = useState(true);
  const [combatLog, setCombatLog] = useState([]);

  /*
  updateCombatLog = (string) => {
    setCombatLog(prev => [...prev, string])
  };
  */

  /* doOneRoundCombat = () => {
    Player attacks enemy
      Run check to see if player rolls rdmNum + SPD vs enemy AC + SPD
      IF HIT, enemy takes damage (setting enemy to {...enemy, HP: current - player.ATK})
      IF MISS, enemy does not take damage
    CHECK is performed to see if enemy is alive (enemy.HP > 0)
    IF ENEMY ALIVE enemy attacks player
      run check to see if enemy rolls rdmNum+SPD vs player.AC+SPD
      IF HIT, player takes damage (player.HP - (enemy.ATK - player.AC))
      IF MISS, round ends
    IF ENEMY DEAD player is given rewards
      activeCombat is set to false
      player is rewarded (enemy.xp and enemy.gold)
      button leading back to village will update HeroProvider
  }*/

};

export default useCombatHook;
