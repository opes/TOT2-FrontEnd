/* eslint-disable max-len */

const grabRandomEnemy = (playerLevel, enemyList) => {
  const randomEnemyIndex = Math.floor(Math.random() * enemyList.length);

  while(enemyList[randomEnemyIndex].level <= playerLevel) return enemyList[randomEnemyIndex];
};

export default grabRandomEnemy;
