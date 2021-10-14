import { useState, useEffect } from 'react';
import { getUserById } from '../services/backendUtils';

const useGetUser = (id) => {
  const [userObj, setUserObj] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(id)
      .then((user) => setUserObj(user))
      .finally(() => setLoading(false));
  }, []);

  return { userObj, loading };
};

export default useGetUser;
