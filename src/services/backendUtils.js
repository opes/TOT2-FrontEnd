const URL = process.env.REACT_APP_DATABASE_URL;

export async function createUser(user) {
  const response = await fetch(`${URL}/api/v1/users`,
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(user)
    }
  );
  return response.json();
}

export async function getUserById(id) {
  const response = await fetch(`${URL}/api/v1/users/${id}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }
  );
  return response.json();
}

export async function updateUserById(id, updatedUser) {
  const response = await fetch(`${URL}/api/v1/users/${id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(updatedUser),
  });
  return response.json();
}

export async function deleteUserById(id) {
  const response = await fetch(`${URL}/api/v1/users/${id}`,
    {
      method: 'DELETE',
      mode: 'cors',
    }
  );
  return response.json();
}

export async function getAllUsers() {
  const response = await fetch(`${URL}/api/v1/users`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }
  );
  return response.json();
}
