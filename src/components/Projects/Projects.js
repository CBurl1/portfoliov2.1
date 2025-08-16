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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autosort}
              isBlog={false}
              title="AutoSortPro – AI-Powered File Organization"
              description="Intelligent file management application that uses AI to automatically organize, tag, and categorize documents, images, and screenshots. Features smart tagging, title generation, content summarization, and intelligent search capabilities. Supports multiple file formats (JPEG, PNG, PDF, DOCX, etc.) with export options to Obsidian and Markdown. Built with Electron, FastAPI, React, and PostgreSQL, serving 95+ trusted users who have reclaimed 120+ hours through smart automation."
              showGitHub={false}
              demoLink="https://autosortpro.com"
              buttonText="Live"
              videoDemo="https://www.youtube.com/watch?v=VLEiTljMmFk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={m2}
              isBlog={false}
              title="M2 InstaCount – Magento 2 Inventory Management"
              description="My first project as a solo developer, M2 InstaCount is a web app built with React, Flask, PostgreSQL, and JWT to streamline inventory management for Magento 2 stores. The app enables real-time tracking of stock, barcode scanning, and SKU identification, allowing store owners to compare actual versus expected inventory levels. With advanced error handling to manage discrepancies and a receiving tool that generates CSVs for supplier comparisons, M2 InstaCount provides an efficient and accurate solution to inventory management challenges."
              showGitHub={false}
              demoLink="https://m2instacount.com"
              buttonText="Live"
              videoDemo="https://www.youtube.com/watch?v=m02yoiAsPDY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={journal}
              isBlog={false}
              title="AI Powered Voice Wellness Journal"
              description="Funded by an OpenHome grant, this application is powered by a LLM and has a conversation with the user relating to their wellness. The journal adapts over time in order to ask better questions. The journal is sent to the user via text with the Twilio API. The journal will run off of OpenHome's smart speaker once the hardware is developed. Built with Python."
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
