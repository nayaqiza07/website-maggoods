import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./Order.css";

const Order = () => {
  return (
    <div className="o">
      <Container className="o-container">
        <Row className="o-title mb-5">
          <Col>
            <h1>Our Product</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="o-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Magot Segar</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="o-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Magot Kering</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="o-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Magot</Card.Title>
                <Card.Text>Rp. 1000</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="o-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Magot</Card.Title>
                <Card.Text>Rp. 1000</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
