/* eslint-disable max-len */
import { enemyList } from '../data/enemy-list';

const grabRandomEnemy = (playerLevel) => {
  const randomEnemyIndex = Math.floor(Math.random() * enemyList.length);

  while(enemyList[randomEnemyIndex].level <= playerLevel) return enemyList[randomEnemyIndex];
};

export default grabRandomEnemy;
