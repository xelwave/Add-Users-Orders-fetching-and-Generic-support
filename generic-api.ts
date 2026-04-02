type Order = {
  id: number;
  total: number;
};

const url = "https://fakeapi.net";
async function getOrderData<T>(orderId: number): Promise<T> {
  try {
    const response = await fetch(`${url}/orders/${orderId}`);

    if (!response.ok) {
      throw new Error(`Не удалось получить заказ с id ${orderId} (статус ${response.status})`);
    }

    const orderData = await response.json() as T;

    console.log('Получены данные заказа:', orderData);

    return orderData;
  } catch (error) {
    console.error('Ошибка при получении заказа:', error);
    throw error;
  }
}

getOrderData<Order>(1);