import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginScreen from '../screen/LoginScreen';
import ReviewScreen from '../screen/ReviewScreen';
import { Navbar, Container, Nav } from 'react-bootstrap';
import RestaurantsPage from '../screen/RestaurantsPage';
import ReviewsPage from '../screen/ReviewsPage';
import FriendsPage from '../screen/FriendsPage';

const PageRouter: React.FC = () => {
    return (
        <Router>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">Мое Приложение</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/reviews">Отзывы</Nav.Link>
                  <Nav.Link as={Link} to="/restaurants">Рестораны</Nav.Link>
                  <Nav.Link as={Link} to="/friends">Друзья</Nav.Link>
                  <Nav.Link as={Link} to="/review">Написать отзыв</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            {/* Маршрут для страницы логина */}
            <Route path="/login" element={
              <LoginScreen />
            }/>
    
            {/* Маршрут для страницы отзывов */}
            <Route path="/review" element={
              <ReviewScreen />
            }/>

            {/* Маршрут для страницы отзывов */}
            <Route path="/reviews" element={
              <ReviewsPage />
            }/>

            {/* Маршрут для страницы заведений */}
            <Route path="/restaurants" element={
              <RestaurantsPage />}/>

            {/* Маршрут для страницы контактов */}
            <Route path="/friends" element={
              <FriendsPage />
            }/>
    
            {/* Перенаправление на страницу логина по умолчанию */}
            <Route path="*" element={
              <Navigate to="/login" />
            }/>
            
          </Routes>
        </Router>
      );
};

export default PageRouter;