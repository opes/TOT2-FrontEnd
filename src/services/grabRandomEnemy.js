/* eslint-disable max-len */

const enemyList = [{ name: 'goblin', level: 1 }, { name: 'Boblin', level: 2 }];

const grabRandomEnemy = (playerLevel) => {
  const randomEnemyIndex = Math.floor(Math.random() * enemyList.length);

  while(enemyList[randomEnemyIndex].level <= playerLevel) return enemyList[randomEnemyIndex];
};

export default grabRandomEnemy;
