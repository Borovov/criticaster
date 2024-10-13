import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from './ReviewForm';

function App() {

  return (
    <Container fluid className="d-flex min-vh-100 justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <ReviewForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
