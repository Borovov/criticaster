import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Простая валидация полей
    if (!email || !password) {
      setError('Пожалуйста, введите email и пароль.');
      return;
    }

    // Если данные введены, сбросим ошибку и отправим их на сервер
    setError(null);
    onSubmit(email, password);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded">
      <h3 className="mb-3">Вход</h3>

      {/* Вывод ошибки */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Поле ввода email */}
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      {/* Поле ввода пароля */}
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;