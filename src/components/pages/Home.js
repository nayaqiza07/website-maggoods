import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="h">
      <Container className="h-container border">
        <Row className="h-title">
          <Col>
            <h1>Home</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
