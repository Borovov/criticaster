import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ReviewData } from './type/ReviewData';
import { saveReview } from './service/FormDataService';
import { fetchCities, fetchRestaurants, fetchDishes } from './service/ComboboxService';

interface ReviewFormProps {
  //onSubmit: (data: ReviewData) => void;
  onSubmit?: () => void; // Опционально: можно добавить обработчик после успешной отправки

}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [city, setCity] = useState<string>('');
  const [restaurant, setRestaurant] = useState<string>('');
  const [dish, setDish] = useState<string>('');
  const [review, setReview] = useState<string>('');

  const [cities, setCities] = useState<string[]>([]);
  const [restaurants, setRestaurants] = useState<string[]>([]);
  const [dishes, setDishes] = useState<string[]>([]);

  // Загрузка городов при монтировании компонента
  useEffect(() => {
    const loadCities = async () => {
      try {
        const citiesData = await fetchCities();
        setCities(citiesData);
      } catch (error) {
        console.error('Ошибка при загрузке городов:', error);
      }
    };
    loadCities();
  }, []);

  // Загрузка ресторанов при изменении выбранного города
  useEffect(() => {
    if (city) {
      const loadRestaurants = async () => {
        try {
          const restaurantsData = await fetchRestaurants(city);
          setRestaurants(restaurantsData);
          setRestaurant(''); // Сбросить выбранный ресторан при изменении города
        } catch (error) {
          console.error('Ошибка при загрузке ресторанов:', error);
        }
      };
      loadRestaurants();
    }
  }, [city]);

  // Загрузка блюд при изменении выбранного ресторана
  useEffect(() => {
    if (restaurant) {
      const loadDishes = async () => {
        try {
          const dishesData = await fetchDishes(restaurant);
          setDishes(dishesData);
          setDish(''); // Сбросить выбранное блюдо при изменении ресторана
        } catch (error) {
          console.error('Ошибка при загрузке блюд:', error);
        }
      };
      loadDishes();
    }
  }, [restaurant]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reviewData: ReviewData = {
      city,
      restaurant,
      dish,
      review,
    };

    // Сохраняем отзыв с помощью функции из сервиса
    await saveReview(reviewData);

    // Вызовем callback, если передан
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      {/* Поле выбора города */}
      <Form.Group controlId="formCity" className="mb-3">
        <Form.Label>Выберите город</Form.Label>
        <Form.Select value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">Выберите...</option>
          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Поле выбора ресторана */}
      <Form.Group controlId="formRestaurant" className="mb-3">
        <Form.Label>Выберите ресторан</Form.Label>
        <Form.Select value={restaurant} onChange={(e) => setRestaurant(e.target.value)} required disabled={!city}>
          <option value="">Выберите...</option>
          {restaurants.map((restaurantName) => (
            <option key={restaurantName} value={restaurantName}>
              {restaurantName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Поле выбора блюда */}
      <Form.Group controlId="formDish" className="mb-3">
        <Form.Label>Выберите блюдо</Form.Label>
        <Form.Select value={dish} onChange={(e) => setDish(e.target.value)} required disabled={!restaurant}>
          <option value="">Выберите...</option>
          {dishes.map((dishName) => (
            <option key={dishName} value={dishName}>
              {dishName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Поле для ввода текста отзыва */}
      <Form.Group controlId="formReview" className="mb-3">
        <Form.Label>Напишите отзыв</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Ваш отзыв..."
          required
        />
      </Form.Group>

      {/* Кнопка отправки */}
      <Button variant="primary" type="submit">
        Отправить отзыв
      </Button>
    </Form>
  );
};

export default ReviewForm;
