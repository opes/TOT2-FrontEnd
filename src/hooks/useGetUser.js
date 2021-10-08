import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getUserById } from '../services/backendUtils';

const useGetUser = () => {
  const [userObj, setUserObj] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 

  useEffect(() => {
    getUserById(id)
      .then((user) => setUserObj(user))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(userObj);
  return { userObj, loading };
};

export default useGetUser;
