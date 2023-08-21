import React from "react";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Movix",
      description: "Latest Movies and Tv Shows",
      imgUrl: projImg1,
      link: "https://movix-sinha-niranjan.vercel.app/",
    },
    {
      title: "Snake Game",
      description: "SnakeMania- ek gaming katha ",
      imgUrl: projImg2,
      link: "https://bright-marzipan-7acd42.netlify.app",
    },
    {
      title: "Todo List",
      description: "Manage Your Task",
      imgUrl: projImg7,
      link: "https://todo-list-eta-pink.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description: "Portfolio - Niranjan Kumar",
      imgUrl: projImg4,
      link: "https://personal-portfolio-six-self.vercel.app/",
    },

    {
      title: "Ecommerce App",
      description: "ecommerce app",
      imgUrl: projImg9,
      link: "https://frontend-mern-ecommerce-sinha-niranjan.vercel.app/",
    },{
      title: "Youtube-Clone",
      description: "Youtube Clone - video watching app",
      imgUrl: projImg8,
      link: "https://youttube-clone-sinha-niranjan.vercel.app/",
    },
    
  ];
  const Projects2 = [
    {
      title: "Music Player",
      description: "Listen Music",
      imgUrl: projImg3,
      link: "https://sinha-niranjan.github.io/Music-app/",
    },
    {
      title: "Whats App Clone",
      description: "Whats Clone - Chating APP",
      imgUrl: projImg6,
      link: "#",
    },
    {
      title: "News App",
      description: "Read latest news",
      imgUrl: projImg5,
      link: "",
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Projects are the backbone of a web developer's growth. They
                    offer real-world challenges, opportunities to refine skills,
                    and a tangible portfolio to showcase expertise. Projects
                    drive innovation, foster learning, and demonstrate
                    proficiency in building functional and impactful web
                    solutions.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content align-items-center "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <>
                          <ProjectCard key={index} {...project} />
                        </>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"> <Row>
                    {Projects2.map((project, index) => {
                      return (
                        <>
                          <ProjectCard key={index} {...project} />
                        </>
                      );
                    })}
                  </Row></Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
