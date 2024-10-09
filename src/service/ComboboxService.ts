
// Получение списка городов
export const fetchCities = async (): Promise<string[]> => {
    const response = await fetch('/api/cities');
    if (!response.ok) {
      throw new Error('Ошибка при загрузке городов');
    }
    return await response.json();
  };
  
  // Получение списка ресторанов по выбранному городу
  export const fetchRestaurants = async (city: string): Promise<string[]> => {
    const response = await fetch(`/api/restaurants?city=${city}`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке ресторанов');
    }
    return await response.json();
  };
  
  // Получение списка блюд по выбранному ресторану
  export const fetchDishes = async (restaurant: string): Promise<string[]> => {
    const response = await fetch(`/api/dishes?restaurant=${restaurant}`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке блюд');
    }
    return await response.json();
  };
  