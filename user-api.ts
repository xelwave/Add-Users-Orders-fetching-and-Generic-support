
type User = {
  id: number;
  name: string;
};

const url = "https://fakeapi.net";

function getUserData(userId: number): Promise<User> {
  return fetch(`${url}/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Не удалось получить пользователя с id ${userId} (статус ${response.status})`);
      }
      return response.json() as Promise<User>;
    })
    .then((userData) => {
      console.log('Получены данные пользователя:', userData);
      return userData;
    })
    .catch((error) => {
      console.error('Ошибка при получении пользователя:', error);
      throw error;
    });
}

getUserData(4);