import React from "react";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const App = () => {
    const cart = useSelector((state) => state.cart.value);

    return (
        <div className="m-4">
            <h4 className='m-3'><Badge bg="dark">Cart Items: {cart.length}</Badge></h4>
            {cart && cart.length > 0 ?
                <><Row xs={1} sm={2} md={5} className="g-4">
                    {cart.map((item) => (
                        <Col key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                            <Card style={{ width: '18rem' }} bg="dark" text="light">
                                <Card.Header variant="dark">{item.type}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.desciption}
                                        <div>{`Quantity: 4`}</div>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                    <Row xs={1} sm={6} className="g-4 my-4">
                        <Col>
                        
                        <Form.Select aria-label="Select Payment" style={{ backgroundColor: "#212529", color: "white"}}>
                            <option value="paytm">Paytm</option>
                            <option value="payu">Payu</option>
                            <option value="phonepe">Phonpe</option>
                            <option value="google_pay">Google Pay</option>
                        </Form.Select>
                        
                        </Col>
                        <Col>
                        <Button variant="dark" className="mx-2">Proceed to Payment</Button>
                        </Col>
                    </Row>
                </> :
                <Alert variant="dark">
                    <Alert.Heading>Hey, Nice to see you!!</Alert.Heading>
                    <h5>No items to display in your cart yet.</h5>
                    <p>
                        There is nothing added in your cart. Pls navigate to home/product page and add some products from <strong>AB-KART</strong>.
                    </p>
                </Alert>
            }
        </div>
    )
}

export default App;