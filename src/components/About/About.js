import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Skills and Tools Section - Side by Side at Top */}
        <Row style={{ justifyContent: "center", padding: "20px 0", marginBottom: "40px" }}>
          
          {/* Left Column for Professional Skillset */}
          <Col
            lg={6}
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <Techstack />
          </Col>

          {/* Right Column for Tools */}
          <Col
            lg={6}
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />
          </Col>

        </Row>

        {/* About Me Section - Full Width Below Skills */}
        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <Col lg={8} md={10} sm={12}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
              <strong className="purple">Get to know me</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
