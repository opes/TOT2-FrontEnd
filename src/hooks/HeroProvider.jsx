/* eslint-disable max-len */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const HeroContext = createContext();
const HeroProvider = ({ children }) => {
  const [contextHero, setContextHero] = useState();
  
  return (
    <HeroContext.Provider value={{ contextHero, setContextHero }}>
      {children}
    </HeroContext.Provider>
  );
};

// These two hooks could be combined
export const useContextHero = () => {
  const { contextHero } = useContext(HeroContext);
  return contextHero;
};

export const useSetContextHero = () => {
  const { setContextHero } = useContext(HeroContext);
  return setContextHero;
};

HeroProvider.propTypes = {
  children: PropTypes.node.isRequired
};
  
export default HeroProvider;
  
