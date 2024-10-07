import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ReviewForm from './ReviewForm';
import { ReviewData } from './ReviewData';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const handleFormSubmit = (data: ReviewData) => {
  console.log('Отправляем данные:', data);
  // Пример отправки данных на back-end
  fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      console.log('Успешно:', result);
    })
    .catch(error => {
      console.error('Ошибка при отправке:', error);
    });
};

root.render(
  <React.StrictMode>
    <Container fluid className="d-flex min-vh-100 justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} md={4} lg={4} className="mx-auto">
          <ReviewForm onSubmit={handleFormSubmit} />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
