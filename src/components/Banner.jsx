import React,{useEffect,useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Niranjan Kumar`}{" "}
              <span className="wrap"> web developer </span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius vel
              in eum? At numquam, non eius vero quis nulla atque?
            </p>
            <button onClick={() => console.log("connect")}>
              {" "}
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
