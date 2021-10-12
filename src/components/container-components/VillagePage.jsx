import React from 'react'
import { useHistory } from 'react-router-dom';
import { useActiveSession } from '../../hooks/SessionProvider';

const VillagePage = () => {
  const activeSession = useActiveSession();
  const history = useHistory(); 

  if (!activeSession) history.push('/'); 
  
  return (
    <div>
      <button onClick={() => history.push('/cutscene')}>Cutscene</button>
    </div>
  );
}

export default VillagePage