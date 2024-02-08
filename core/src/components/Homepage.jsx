import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';

function Homepage() {
  return (
    <div className='m-4'>
    <h4 className='m-3'><Badge bg="dark">In Hoouse Products</Badge></h4>
    <Row xs={1} sm={2} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: '18rem' }} bg="dark" text="light">
            <Card.Img variant="top" src="https://picsum.photos/200" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="light">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Homepage;