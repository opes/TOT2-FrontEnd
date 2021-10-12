/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import grabRandomEnemy from '../services/grabRandomEnemy';

const useCombatHook = (heroObj, enemyListArr) => {
  const [player, setPlayer] = useState(heroObj);
  const [enemy, setEnemy] = useState({});
  const [activeCombat, setActiveCombat] = useState(true);
  const [loading, setLoading] = useState(true);
  const [combatLog, setCombatLog] = useState([]);
 
  useEffect(() => {
    const chosenEnemy = grabRandomEnemy(player?.level, enemyListArr);
    console.log(chosenEnemy, 'from combathook again');
    setEnemy(chosenEnemy);
    setLoading(false);
  }, []);

  const updateCombatLog = (string) => {
    setCombatLog(prev => [...prev, string]);
  };

  const attackRoll = (attacker) => {
    const rdmRoll = Math.ceil(Math.random() * 10);
    const attackRoll = Number(rdmRoll + attacker.SPD);
    return attackRoll;
  };

  const doDamage = (attacker, defender) => {
    const additionalDamage = Math.floor(Math.random() * (3 * attacker.level));
    let damageDone = (attacker.ATK + additionalDamage) - defender.AC;
    if(damageDone < 0) damageDone = 0;
    const defenderHP = defender.HP - damageDone;
    return defenderHP;
  };

  const doFlee = () => {
    const flee = confirm(`Do you want to flee from ${enemy?.name}? [${enemy?.gold}]`);
    if (flee) {
      let newPlayerGold = player.gold - enemy?.gold;
      if (newPlayerGold <= 0) newPlayerGold = 0;
      setPlayer(prev => {
        return { ...prev, gold: newPlayerGold };
      });
      return true;
    }
    return false;
  };

  const doOneCombatRound = () => {
    const playerHitChance = player.AC + player.SPD;
    const enemyHitChance = enemy?.AC + enemy?.SPD;

    //PLAYER PHASE
    const playerAttack = attackRoll(player);
    if(playerAttack >= enemyHitChance) {
      //IF PLAYER HITS, THESE ACTIONS ARE TAKEN
      const newEnemyHP = doDamage(player, enemy);
      if (newEnemyHP <= 0) {
        const newPlayerXP = player.XP + enemy?.XP;
        const newPlayerGold = player.gold + enemy?.gold;
        setPlayer(prev => {
          return { ...prev, XP: newPlayerXP, gold: newPlayerGold };
        });
        updateCombatLog(`The Hero has dealt ${enemy?.HP - newEnemyHP} damage, slaining ${enemy?.name}, gaining ${enemy?.gold} gold pieces and ${enemy?.XP} experience!`);
        setActiveCombat(false);
        return 'Combat Done';
      } else if (newEnemyHP > 0) {
        updateCombatLog(`The hero hits ${enemy?.name} for ${enemy?.HP - newEnemyHP} damage!`);
        setPlayer(prev => {
          return { ...prev, STM: prev.STM - 1 };
        });
        setEnemy(prev => {
          return { ...prev, HP: newEnemyHP };
        });
      }
    } else {
      //IF PLAYER MISSES, THIS HAPPENS
      updateCombatLog(`The Hero misses their attack against ${enemy?.name}`);
    }

    //ENEMY HP CHECK
    if(enemy?.HP > 0) {
      //ENEMY PHASE
      const enemyAttack = attackRoll(enemy);
      if(enemyAttack >= playerHitChance) {
        const newPlayerHP = doDamage(enemy, player);
        updateCombatLog(`The ${enemy?.name} hits the Hero for ${player.HP - newPlayerHP} damage!`);
        setPlayer(prev => {
          return { ...prev, HP: newPlayerHP };
        });
      } else {
        updateCombatLog(`The ${enemy?.name} misses their attack against the Hero`);
      }
    }

    //FINAL CHECK TO SEE IF PLAYER LIVES
    if(player.HP <= 0) {
      setActiveCombat(false);
      updateCombatLog(`The Hero has fallen at the hands of ${enemy?.name}...`);
      setPlayer(prev => {
        return { ...prev, XP: 0, gold: 0 };
      });
    }
  };

  return { player, enemy, activeCombat, combatLog, loading, doOneCombatRound, doFlee };

};

export default useCombatHook;
