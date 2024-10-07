import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ReviewData } from './ReviewData';

interface ReviewFormProps {
  onSubmit: (data: ReviewData) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [city, setCity] = useState<string>('');
  const [restaurant, setRestaurant] = useState<string>('');
  const [dish, setDish] = useState<string>('');
  const [review, setReview] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ city, restaurant, dish, review });
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      {/* Поле выбора города */}
      <Form.Group controlId="formCity" className="mb-3">
        <Form.Label>Выберите город</Form.Label>
        <Form.Select value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">Выберите...</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Новосибирск">Новосибирск</option>
          {/* Добавьте другие города */}
        </Form.Select>
      </Form.Group>

      {/* Поле выбора ресторана */}
      <Form.Group controlId="formRestaurant" className="mb-3">
        <Form.Label>Выберите ресторан</Form.Label>
        <Form.Select value={restaurant} onChange={(e) => setRestaurant(e.target.value)} required>
          <option value="">Выберите...</option>
          <option value="Ресторан 1">Ресторан 1</option>
          <option value="Ресторан 2">Ресторан 2</option>
          <option value="Ресторан 3">Ресторан 3</option>
          {/* Добавьте другие рестораны */}
        </Form.Select>
      </Form.Group>

      {/* Поле выбора блюда */}
      <Form.Group controlId="formDish" className="mb-3">
        <Form.Label>Выберите блюдо</Form.Label>
        <Form.Select value={dish} onChange={(e) => setDish(e.target.value)} required>
          <option value="">Выберите...</option>
          <option value="Блюдо 1">Блюдо 1</option>
          <option value="Блюдо 2">Блюдо 2</option>
          <option value="Блюдо 3">Блюдо 3</option>
          {/* Добавьте другие блюда */}
        </Form.Select>
      </Form.Group>

      {/* Поле для ввода текста отзыва */}
      <Form.Group controlId="formReview" className="mb-3">
        <Form.Label>Напишите отзыв</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
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
