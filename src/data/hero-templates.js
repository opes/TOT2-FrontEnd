/* eslint-disable max-len */
const dwarfWarrior = {
  type: 'dwarf',
  HP: 15,
  MAXHP: 15,
  STM: 10,
  AC: 6,
  SPD: 1,
  ATK: 3,
  level: 1,
  gold: 0,
  XP: 0,
};

const foxArcher = {
  type: 'fox',
  HP: 10,
  MAXHP: 10,
  STM: 10,
  AC: 2,
  SPD: 5,
  ATK: 4,
  level: 1,
  gold: 0,
  XP: 0,
};

const devilkinMage = {
  type: 'devilkin',
  HP: 8,
  MAXHP: 8,
  STM: 10,
  AC: 1,
  SPD: 8,
  ATK: 6,
  level: 1,
  gold: 0,
  XP: 0,
};

const vampireRonin = {
  type: 'vampire',
  HP: 20,
  MAXHP: 20,
  STM: 10,
  AC: 3,
  SPD: 3,
  ATK: 3,
  level: 1,
  gold: 0,
  XP: 0,
};

export const heroes = { dwarfWarrior, foxArcher, devilkinMage, vampireRonin };

const dwarfLevelUp = {
  HP: 3,
  STM: 2,
  SPD: 1,
  ATK: 2,
  level: 1,
};
  
const foxLevelUp = {
  HP: 2,
  STM: 1,
  SPD: 2,
  ATK: 2,
  level: 1,
};
  
const devilkinLevelUp = {
  HP: 2,
  STM: 1,
  SPD: 2,
  ATK: 4,
  level: 1,
};
  
const vampireLevelUp = {
  HP: 4,
  STM: 1,
  SPD: 2,
  ATK: 2,
  level: 1,
};

export const heroesLevelUp = { dwarfLevelUp, foxLevelUp, devilkinLevelUp, vampireLevelUp };
