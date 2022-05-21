import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="a">
      <Container className="a-container border">
        <Row className="a-title">
          <Col>
            <h1>Tentang Kami</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
