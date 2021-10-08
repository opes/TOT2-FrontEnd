import React from 'react'; 
import useGetUser from '../../hooks/useGetUser';
import { cutscene } from '../../data/cutscene';

const CutScene = () => {

  const { userObj, loading } = useGetUser();

  if (loading) return <div>'Loading...'</div>
  console.log(userObj);
  return (
    <div>
      <article>{cutscene.intro}</article>
      <article>{cutscene[userObj?.heroStats?.type]}</article>
    </div>
  );
}
{
  // cutscene[`${userObj.heroStats?.type}`];
}
export default CutScene;
