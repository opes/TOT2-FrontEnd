/* eslint-disable max-len */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

//These two contexts are the backbone of play sessions.
export const SessionContext = createContext();
const SessionProvider = ({ children }) => {
  const [contextGoogleId, setContextGoogleId] = useState();
  const [activeSession, setActiveSession] = useState(false);

  return (
    <SessionContext.Provider value={{ contextGoogleId, setContextGoogleId, activeSession, setActiveSession }}>
      {children}
    </SessionContext.Provider>
  );
};
//These hooks allow all children comps to have access to the context state

// These two hooks could be combined
export const useContextGoogleId = () => {
  const { contextGoogleId } = useContext(SessionContext);
  return contextGoogleId;
};

export const useSetContextGoogleId = () => {
  const { setContextGoogleId } = useContext(SessionContext);
  return setContextGoogleId;
};

// These two hooks could be combined
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
