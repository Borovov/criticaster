import React from 'react';
import LoginForm from './LoginForm';

const LoginScreen: React.FC = () => {
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Ошибка авторизации');
      }

      const result = await response.json();
      console.log('Успешный вход:', result);
      // Обработка успешного входа, например, перенаправление
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось войти. Проверьте правильность данных.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div style={{ width: '400px' }}>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginScreen;
