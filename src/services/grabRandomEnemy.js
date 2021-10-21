const grabRandomEnemy = (playerLevel, enemyList) => {
  let randomEnemyIndex = Math.floor(Math.random() * enemyList.length);
  while (enemyList[randomEnemyIndex].level > playerLevel) {
    randomEnemyIndex = Math.floor(Math.random() * enemyList.length);
  }
  return enemyList[randomEnemyIndex];
};

export default grabRandomEnemy;
