import React from 'react'; 
import useGetUser from '../../hooks/useGetUser';
import { cutscene } from '../../data/cutscene';
import { useContextGoogleId } from '../../hooks/SessionProvider';

const CutScene = () => {
  const contextGoogleId = useContextGoogleId();
  const { userObj, loading } = useGetUser(contextGoogleId);

  if (loading) return <div>'Loading...'</div>
  console.log(userObj);
  return (
    <div>
      <article>{cutscene.intro}</article>
      <article>{cutscene[userObj?.heroStats?.type]}</article>
    </div>
  );
}

export default CutScene;
