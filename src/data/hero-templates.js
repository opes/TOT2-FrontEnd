/* eslint-disable max-len */
const dwarfWarrior = {
  type: 'dwarf',
  HP: 25,
  STM: 10,
  AC: 6,
  SPD: 1,
  ATK: 3,
  level: 1,
  gold: 0,
  XP: 0
};

const foxArcher = {
  type: 'fox',
  HP: 20,
  STM: 10,
  AC: 2,
  SPD: 5,
  ATK: 4,
  level: 1,
  gold: 0,
  XP: 0
};

const devilkinMage = {
  type: 'devilkin',
  HP: 15,
  STM: 10,
  AC: 1,
  SPD: 8,
  ATK: 6,
  level: 1,
  gold: 0,
  XP: 0
};

const vampireRonin = {
  type: 'vampire',
  HP: 35,
  STM: 10,
  AC: 3,
  SPD: 3,
  ATK: 3,
  level: 1,
  gold: 0,
  XP: 0
};

export const heroes = { dwarfWarrior, foxArcher, devilkinMage, vampireRonin };

const dwarfWarriorLevelUp = {
  HP: 5,
  STM: 7,
  SPD: 1,
  ATK: 2,
  level: 1,
};
  
const foxArcherLevelUp = {
  HP: 3,
  STM: 5,
  SPD: 2,
  ATK: 3,
  level: 1,
};
  
const devilkinMageLevelUp = {
  HP: 2,
  STM: 5,
  SPD: 3,
  ATK: 4,
  level: 1,
};
  
const vampireRoninLevelUp = {
  HP: 8,
  STM: 5,
  SPD: 2,
  ATK: 2,
  level: 1,
};

export const heroesLevelUp = { dwarfWarriorLevelUp, foxArcherLevelUp, devilkinMageLevelUp, vampireRoninLevelUp };
