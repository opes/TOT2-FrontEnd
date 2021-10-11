/* eslint-disable max-len */
import React from 'react'; 
import useGetUser from '../../hooks/useGetUser';
import { useHistory } from 'react-router-dom';
import { cutscene } from '../../data/cutscene';
import { useActiveSession, useContextGoogleId } from '../../hooks/SessionProvider';

const CutScene = () => {
  const contextGoogleId = useContextGoogleId();
  const activeSession = useActiveSession();
  const { userObj, loading } = useGetUser(contextGoogleId);
  const history = useHistory(); 

  if (!activeSession) history.push('/');
  
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <article>{cutscene.intro}</article>
      <article>{cutscene[userObj?.heroStats?.type]}</article>
      <button onClick={() => history.push('/tutorial')}>
        Begin Adverture
      </button> 
    </div>
  );
};

export default CutScene;
