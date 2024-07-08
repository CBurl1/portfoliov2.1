import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import journal from "../../Assets/Projects/wellness-journal.png";
import m2 from "../../Assets/Projects/m2-instacount.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Check out some of the applications I've made lately
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={journal}
              isBlog={false}
              title="AI Powered Voice Wellness Journal"
              description="Funded by an OpenHome grant, this application is powered by a LLM and has a conversation with the user relating to their wellness. The journal adapts over time in order to ask better questions. The journal is sent to the user via text with the Twilio API. The journal will run off of OpenHome's smart speaker once the hardware is developed. Built with Python."
              showGitHub = {false} // option to not show github
              demoLink="https://www.loom.com/share/a29cbce183324c6fa0dc31b8ea0389e8"

            />
          </Col>

          <Col md={4} className="project-card">

            <ProjectCard
              imgPath={m2}
              isBlog={false}
              title="M2 InstaCount"
              description="Crafted M2 InstaCount for Magento 2 stores using React, Flask, PostgreSQL, and JWT. This app simplifies inventory with real-time tracking, barcode/SKU identification, image verification, discrepancy reports, and Magento export integration."
              showGitHub = {false} // option to not show github
              // ghLink="https://github.com/cburl1/mrti"
              demoLink="https://m2instacount.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
