import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div>
                    <h2
                      className={
                        isVisible ? "animate__animated animate__backInLeft" : ""
                      }
                    >
                      Skills
                    </h2>
                    <p
                      className={
                        isVisible
                          ? "animate__animated animate__backInRight"
                          : ""
                      }
                    >
                      A skilled web developer possesses a versatile toolkit to
                      craft captivating digital experiences. They master
                      programming languages like HTML, CSS, and JavaScript,
                      while staying updated with emerging technologies. Their
                      skills encompass responsive design, UX/UI principles,
                      backend development, database management, and
                      problem-solving. They blend creativity and technical
                      expertise to build dynamic websites that leave a lasting
                      impact.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Backend Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5> Node js </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5> Express js </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Monog DB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>My Sql</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Python </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Pandas</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Numpy</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>React Redux</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Socket.io</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Skill;
