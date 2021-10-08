import { useState } from 'react';

const useSessionHook = () => {
  const [googleId, setGoogleId] = useState();
  const [activeSession, setActiveSession] = useState();

  return { googleId, setGoogleId, activeSession, setActiveSession };
};

export default useSessionHook;

