import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="cu">
      <Container className="cu-container border">
        <Row className="cu-title">
          <Col>
            <h1>Hubungi Kami</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
