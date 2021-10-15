/* eslint-disable max-len */
const goblin1 = {
  level: 1,
  HP: 8,
  AC: 2,
  SPD: 4,
  ATK: 2,
  name: 'Goblin',
  img: 'https://cdn.discordapp.com/attachments/380989362755600394/898626117165010974/Idle01.png',
  XP: 5,
  gold: 3
};

const goblin2 = {
  level: 1,
  HP: 8,
  AC: 1,
  SPD: 3,
  ATK: 3,
  name: 'Necro-Goblin',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898635913851174952/lamentum_muchosenemigos.png_5.png',
  XP: 5,
  gold: 4
};

const goblin3 = {
  level: 1,
  HP: 3,
  AC: 0,
  SPD: 6,
  ATK: 1,
  name: 'Necro-Goblin',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898636077852684358/zombie_7.png.png',
  XP: 5,
  gold: 3
};

const zombie1 = {
  level: 1,
  HP: 14,
  AC: 0,
  SPD: 1,
  ATK: 3,
  name: 'Shambling Zombie',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898635278015676416/lamentum_muchosenemigos.png.png',
  XP: 5,
  gold: 1
};

const skeleton1 = {
  level: 1,
  HP: 6,
  AC: 1,
  SPD: 4,
  ATK: 3,
  name: 'Budding Corpse',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898636425862467634/lamentum_muchosenemigos.png_6.png',
  XP: 5,
  gold: 2
};

const fly = {
  level: 1,
  HP: 3,
  AC: 0,
  SPD: 6,
  ATK: 1,
  name: 'Rot Fly',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898635714697257000/lamentum_muchosenemigos.png_3.png',
  XP: 5,
  gold: 4
};

const hobgoblin = {
  level: 2,
  HP: 20,
  AC: 4,
  SPD: 4,
  ATK: 4,
  name: 'Horned Necro-Goblin',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898636768792969266/lamentum_muchosenemigos.png_9.png',
  XP: 8,
  gold: 9
};

const skeleton2 = {
  level: 2,
  HP: 10,
  AC: 4,
  SPD: 4,
  ATK: 4,
  name: 'Sprouting Corpse',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898636425862467634/lamentum_muchosenemigos.png_6.png',
  XP: 8,
  gold: 3
};

const zombie2 = {
  level: 2,
  HP: 20,
  AC: 0,
  SPD: 2,
  ATK: 4,
  name: 'Rotting Zombie',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898637130509742090/lamentum_muchosenemigos.png_11.png',
  XP: 8,
  gold: 3
};

const goblin4 = {
  level: 2,
  HP: 13,
  AC: 4,
  SPD: 1,
  ATK: 5,
  name: 'Pus-Bearer Goblin',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898635433527877672/lamentum_muchosenemigos.png_1.png',
  XP: 5,
  gold: 6
};

const goblin5 = {
  level: 2,
  HP: 13,
  AC: 1,
  SPD: 4,
  ATK: 3,
  name: 'Flesh-Bearer Goblin',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898635597713915944/lamentum_muchosenemigos.png_2.png',
  XP: 5,
  gold: 6
};

const snail = {
  level: 3,
  HP: 40,
  AC: 5,
  SPD: 0,
  ATK: 9,
  name: 'Necro-Snail',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898635813519233054/lamentum_muchosenemigos.png_4.png',
  XP: 20,
  gold: 25
};

const spider = {
  level: 2,
  HP: 8,
  AC: 1,
  SPD: 6,
  ATK: 3,
  name: 'Blood Spider',
  img: 'https://cdn.discordapp.com/attachments/852813558109569024/898636687717072926/lamentum_muchosenemigos.png_8.png',
  XP: 8,
  gold: 4
};

export const enemyList = [
  // LEVEL 1
  goblin1, goblin2, goblin3, zombie1, skeleton1, fly,
  // LEVEL 2
  hobgoblin, skeleton2, zombie2, goblin4, spider, goblin5,
  // LEVEL 3
  snail
];
