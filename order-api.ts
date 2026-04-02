type Order = {
  id: number;
  total: number;
};

const url = "https://fakeapi.net";

async function getOrderData(orderId: number): Promise<Order> {
  try {
    const response = await fetch(`${url}/orders/${orderId}`);

    if (!response.ok) {
      throw new Error(`Не удалось получить заказ с id ${orderId} (статус ${response.status})`);
    }

    const orderData = await response.json() as Order;

    console.log('Получены данные заказа:', orderData);

    return orderData;
  } catch (error) {
    console.error('Ошибка при получении заказа:', error);
    throw error;
  }
}

getOrderData(1);