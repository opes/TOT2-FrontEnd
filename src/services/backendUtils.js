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
