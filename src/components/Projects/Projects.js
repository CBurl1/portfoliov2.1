import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import journal from "../../Assets/Projects/wellness-journal.png";
import m2 from "../../Assets/Projects/m2-instacount.png";
import autosort from "../../Assets/Projects/m2-instacount.png"; // Placeholder - replace with AutoSortPro image

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
          <Col md={4} className="project-card" style={{ display: "flex", alignItems: "stretch" }}>
            <ProjectCard
              imgPath={autosort}
              isBlog={false}
              title="AutoSortPro – AI-Powered File Organization"
              description="AI-powered desktop application that automatically organizes, tags, and categorizes files using intelligent analysis. Features smart tagging, title generation, and content summarization. Supports multiple formats with export to Obsidian and Markdown. Built with Electron, FastAPI, React, and PostgreSQL. Serving 95+ users who have reclaimed 120+ hours through automation."
              showGitHub={false}
              demoLink="https://autosortpro.com"
              buttonText="Live"
              videoDemo="https://www.youtube.com/watch?v=VLEiTljMmFk"
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex", alignItems: "stretch" }}>
            <ProjectCard
              imgPath={m2}
              isBlog={false}
              title="M2 InstaCount – Magento 2 Inventory Management"
              description="Web application that streamlines inventory management for Magento 2 stores. Features real-time stock tracking, barcode scanning, SKU identification, and inventory comparison tools. Includes advanced error handling and CSV generation for supplier comparisons. Built with React, Flask, PostgreSQL, and JWT authentication. Improves efficiency by 30-35% and reduces verification time by 50%."
              showGitHub={false}
              demoLink="https://m2instacount.com"
              buttonText="Live"
              videoDemo="https://www.youtube.com/watch?v=m02yoiAsPDY"
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex", alignItems: "stretch" }}>
            <ProjectCard
              imgPath={journal}
              isBlog={false}
              title="AI Powered Voice Wellness Journal"
              description="AI-powered wellness application that conducts intelligent conversations about user wellness. The journal adapts over time to ask more relevant questions and sends personalized entries via SMS using Twilio API. Designed for OpenHome's smart speaker platform. Built with Python and powered by advanced language models. Funded by OpenHome grant."
              showGitHub={false}
              videoDemo="https://www.loom.com/share/a29cbce183324c6fa0dc31b8ea0389e8"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
