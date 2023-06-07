import React from "react";
import { Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__heartBeat" : ""}
            >
              <img src={imgUrl} alt="" />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                if(link != "#")
                {
                  <a href={link}>
                    <p className="link">Click to Visit page </p>
                  </a>
                }
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </Col>
  );
};

export default ProjectCard;
