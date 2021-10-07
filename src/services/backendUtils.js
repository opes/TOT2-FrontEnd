const URL = process.env.DATABASE_URL;

export async function createUser(user) {
  const response = await fetch(`${URL}/api/v1/users/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
  );
  return response.body;
}

export async function getUserById(id) {
  const response = await fetch(`${URL}/api/v1/users/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );
  return response.body;
}

export async function updateUserById(id, updatedUser) {
  const response = await fetch(`${URL}/api/v1/users/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    }
  );
  return response.body;
}
