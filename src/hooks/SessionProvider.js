/* eslint-disable max-len */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

//These two contexts are the backbone of play sessions.
export const SessionContext = createContext();
const SessionProvider = ({ children }) => {
  const [googleId, setGoogleId] = useState();
  const [activeSession, setActiveSession] = useState();

  return (
    <SessionContext.Provider value={{ googleId, setGoogleId, activeSession, setActiveSession }}>
      {children}
    </SessionContext.Provider>
  );
};

//These hooks allow all children comps to have access to the context state

export const useGoogleId = () => {
  const { googleId } = useContext(SessionContext);
  return googleId;
};

export const useSetGoogleId = () => {
  const { setGoogleId } = useContext(SessionContext);
  return setGoogleId;
};

export const useActiveSession = () => {
  const { activeSession } = useContext(SessionContext);
  return activeSession;
};

export const useSetActiveSession = () => {
  const { setActiveSession } = useContext(SessionContext);
  return setActiveSession;
};


SessionProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default SessionProvider;

