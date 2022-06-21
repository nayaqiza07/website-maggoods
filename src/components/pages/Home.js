import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Home.css";
import green1 from "../img/green1.png";

const Home = () => {
  return (
    <div className="h">
      <Container className="h-container">
        <Row className="h-title">
          <Col>
            <h1>
              WELCOME <span>TO</span>
            </h1>
            <h1 className="h-magot">
              MAG<span>GOOD</span>S
            </h1>
            <p className="mt-4">
              MAGGOODS is an alternative to animal feed at the most affordable
              price and best quality for your livestock. What are you waiting
              for let's order now.
            </p>
            <Button variant="success">
              <Link className="h-link" to="order/*">
                Order here
              </Link>
            </Button>
            <div>
              <img src={green1} className="h-green1" width="250" alt="green1" />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
