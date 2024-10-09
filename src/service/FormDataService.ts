import { ReviewData } from '../type/ReviewData';

// Функция для отправки отзыва на сервер
export const saveReview = async (data: ReviewData): Promise<void> => {
  try {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке отзыва');
    }

    const result = await response.json();
    console.log('Отзыв успешно сохранен:', result);
  } catch (error) {
    console.error('Ошибка при сохранении отзыва:', error);
  }
};
