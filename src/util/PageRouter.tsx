import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from '../screen/LoginScreen';
import ReviewScreen from '../screen/ReviewScreen';

const PageRouter: React.FC = () => {
    return (
        <Router>
          <Routes>
            {/* Маршрут для страницы логина */}
            <Route path="/login" element={
              <LoginScreen />
            }/>
    
            {/* Маршрут для страницы отзывов */}
            <Route path="/review" element={
              <ReviewScreen />
            }/>
    
            {/* Перенаправление на страницу логина по умолчанию */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      );
};

export default PageRouter;