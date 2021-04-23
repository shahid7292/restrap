import React from 'react'
import '../App.css';
import Swap from '../images/Swap.jpg'
import per from '../images/per.jpg'
import pen from '../images/pen.jpg'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

function Cardholder() {
    return (
        <div className="cardhold" id="cards">
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem',marginBottom:'36px' }}>
                            <Card.Img variant="top" src={Swap} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                     </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem',marginBottom:'36px' }}>
                            <Card.Img variant="top" src={per} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                     </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem',marginBottom:'36px' }}>
                            <Card.Img variant="top" src={pen} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                     </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Cardholder
