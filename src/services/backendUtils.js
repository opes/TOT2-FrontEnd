const URL = process.env.DATABASE_URL;

export async function createUser(user) {
  const response = await fetch(`${URL}/api/v1/users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );
  return response.json();
}

export async function updateUserById(id, updatedUser) {
  const response = await fetch(`${URL}/api/v1/users/${id}`, {
    method: 'PUT',
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
      method: 'DELETE'
    }
  );
  return response.json();
}

export async function getAllUsers() {
  const response = await fetch(`${URL}/api/v1/users`,
    {
      method: 'GET'
    }
  );
  return response.json();
}
