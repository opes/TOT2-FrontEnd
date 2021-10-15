/* eslint-disable max-len */
import React from 'react';
import styles from './PlayerScroll.css';
import PropTypes from 'prop-types';
import dwarf from '../../assets/dwarf.png';
import fox from '../../assets/fox.png';
import devilkin from '../../assets/devilkin.png';
import vampire from '../../assets/vampire.png';

const PlayerScroll = ({ type, HP, STM, AC, SPD, ATK, level, gold, XP }) => {

  const imgSrc = { dwarf, fox, devilkin, vampire };
  return (
    <>
      <div className={styles['scroll']}>
        <h1 className={styles['hero-type']}>{type}</h1>
        <img src={imgSrc[type]} alt={`${type}`} className={styles['portrait']} />
        <div className={styles['stats']}>
          <div>Health Points: {HP}</div>
          <div>Stamina: {STM}</div>
          <div>Armor Class: {AC}</div>
          <div>Speed: {SPD}</div>
          <div>Attack: {ATK}</div>
          <div>Level: {level}</div>
          <div>Gold: {gold}</div>
          <div>Experience Points: {XP}</div>
        </div>
      </div>
    </>
  );
};

PlayerScroll.propTypes = {
  type: PropTypes.string.isRequired,
  HP: PropTypes.number.isRequired,
  STM: PropTypes.number.isRequired,
  AC: PropTypes.number.isRequired,
  SPD: PropTypes.number.isRequired,
  ATK: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired,
  XP: PropTypes.number.isRequired,
};

export default PlayerScroll;
