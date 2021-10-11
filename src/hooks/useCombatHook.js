/* eslint-disable max-len */
import { useState } from 'react';

const useCombatHook = (heroObj, enemyObj) => {
  const [player, setPlayer] = useState(heroObj);
  const [enemy, setEnemy] = useState(enemyObj);
  const [activeCombat, setActiveCombat] = useState(true);
  const [combatLog, setCombatLog] = useState([]);

  const updateCombatLog = (string) => {
    setCombatLog(prev => [...prev, string]);
  };

  const attackRoll = (attacker) => {
    const rdmRoll = Math.ceil(Math.random() * 10);
    const attackRoll = rdmRoll + attacker.SPD;
    return attackRoll;
  };

  const doDamage = (attacker, defender) => {
    const additionalDamage = Math.floor(Math.random() * (3 * attacker.level));
    const damageDone = defender.AC - (attacker.ATK + additionalDamage);
    const defenderHP = defender.HP - damageDone;
    return defenderHP;
  };

  const doOneCombatRound = () => {
    const playerHitChance = player.AC + player.SPD;
    const enemyHitChance = enemy.AC + enemy.SPD;

    //PLAYER PHASE
    const playerAttack = attackRoll(player);
    if(playerAttack >= enemyHitChance) {
      //IF PLAYER HITS, THESE ACTIONS ARE TAKEN
      const newEnemyHP = doDamage(player, enemy);
      updateCombatLog(`The hero hits ${enemy.name} for ${enemy.HP - newEnemyHP} damage!`);
      setEnemy(prev => {
        return { ...prev, HP: newEnemyHP };
      });
    } else {
      //IF PLAYER MISSES, THIS HAPPENS
      updateCombatLog(`The Hero misses their attack against ${enemy.name}`);
    }

    //ENEMY HP CHECK
    if(enemy.HP > 0) {
      //ENEMY PHASE
      const enemyAttack = attackRoll(enemy);
      if(enemyAttack >= playerHitChance) {
        const newPlayerHP = doDamage(enemy, player);
        updateCombatLog(`The ${enemy.name} hits the Hero for ${player.HP - newPlayerHP} damage!`);
        setPlayer(prev => {
          return { ...prev, HP: newPlayerHP };
        });
      } else {
        updateCombatLog(`The ${enemy.name} misses their attack against the Hero`);
      }
    } else if(enemy.HP <= 0) {
      //REWARDS PHASE
      const newPlayerXP = player.XP + enemy.XP;
      const newPlayerGold = player.gold + enemy.gold;
      setPlayer(prev => {
        return { ...prev, XP: newPlayerXP, gold: newPlayerGold };
      });
      updateCombatLog(`The Hero has slain ${enemy.name}, gaining ${enemy.gold} gold pieces and ${enemy.XP} experience!`);
      setActiveCombat(false);
    }

    //FINAL CHECK TO SEE IF PLAYER LIVES
    if(player.HP <= 0) {
      setActiveCombat(false);
      updateCombatLog(`The Hero has fallen at the hands of ${enemy.name}...`);
      setPlayer(prev => {
        return { ...prev, XP: 0, gold: 0 };
      });
    }
  };

  return { player, enemy, activeCombat, combatLog, doOneCombatRound };

};

export default useCombatHook;
