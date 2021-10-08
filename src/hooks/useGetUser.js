import { useState, useEffect } from 'react'
import { getUserById } from '../services/backendUtils';

const useGetUser = (id) => {

  const [userObj, setUserObj] = useState(); 

  useEffect(() => {
    getUserById(id)
      .then(user => setUserObj(user));
  }, []); 

  return {userObj}; 
}

export default useGetUser; 
