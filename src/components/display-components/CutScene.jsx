/* eslint-disable max-len */
import React from 'react'; 
import useGetUser from '../../hooks/useGetUser';
import { useHistory } from 'react-router-dom';
import { cutscene } from '../../data/cutscene';
import { useActiveSession, useContextGoogleId } from '../../hooks/SessionProvider';
import { useSetContextHero } from '../../hooks/HeroProvider';

const CutScene = () => {
  const contextGoogleId = useContextGoogleId();
  const activeSession = useActiveSession();
  const { userObj, loading } = useGetUser(contextGoogleId);
  const history = useHistory(); 
  const setContextHero = useSetContextHero();

  if (!activeSession) history.push('/');

  if (loading) return <div>Loading...</div>;

  const onClick = () => {
    setContextHero(userObj?.heroStats);
    history.push('/tutorial');
  };

  return (
    <div>
      <article>{cutscene.intro}</article>
      <article>{cutscene[userObj?.heroStats?.type]}</article>
      <button onClick={onClick}>
        Begin Adverture
      </button> 
    </div>
  );
};

export default CutScene;
