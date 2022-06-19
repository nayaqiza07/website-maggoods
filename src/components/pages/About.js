import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="a">
      <Container className="a-container">
        <Row className="a-title">
          <Col>
            <h1>Tentang Kami</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p className="a-emot">😎</p>
            Panji Wahyu Pambudi
            <p>CMO</p>
          </Col>
          <Col>
            <p className="a-emot">😎</p>
            Rafly Rudistira
            <p>COO</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="a-emot">😎</p>
            Bima Farid Daffa
            <p>CEO</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="a-emot">😎</p>
            Faisal Rianto
            <p>CFO</p>
          </Col>
          <Col>
            <p className="a-emot">😎</p>
            Muhammad Nayaqiza Aqro
            <p>IT Development</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
