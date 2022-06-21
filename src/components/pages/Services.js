import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="s">
      <Container className="s-container">
        <Row className="s-title">
          <Col>
            <h1>Penjemputan Sampah</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h5>Untuk penjemputan sampah silahkan klik tombol dibawah</h5>
            <Button
              variant="success"
              className="mt-5"
              href="https://api.whatsapp.com/send?phone=085888808593"
            >
              Klik
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
