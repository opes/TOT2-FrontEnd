import React from 'react'; 
import useGetUser from '../../hooks/useGetUser';
import { useHistory } from 'react-router-dom';
import { cutscene } from '../../data/cutscene';
import { useContextGoogleId } from '../../hooks/SessionProvider';

const CutScene = () => {
  const contextGoogleId = useContextGoogleId();
  const { userObj, loading } = useGetUser(contextGoogleId);
  const history = useHistory(); 

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
