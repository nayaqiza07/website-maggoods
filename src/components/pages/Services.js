import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="s">
      <Container className="s-container border">
        <Row className="s-title">
          <Col>
            <h1>Layanan Kami</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
