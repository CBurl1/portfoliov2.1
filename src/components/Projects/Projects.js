import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've recently created.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="M2 InstaCount"
              description="Crafted M2 InstaCount, a responsive web application for Magento 2 stores, using React, Python with Flask, PostgreSQL, and JWT for secure authentication. This tool simplifies inventory counting through real-time tracking, allowing users to identify items via barcodes or SKUs and view images for verification. The app also supports discrepancy reports and integrates with Magento’s export functions, ensuring efficient inventory reconciliation."
              ghLink="https://github.com/cburl1/mrti"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Parki"
              description="Developed a full-stack web application dedicated to providing skiers and snowboarders with the latest updates on terrain parks. Utilizing React, Python, Flask, SQLite, and session-based authentication, the platform offers real-time information, enhancing the winter sports experience. The application supports user interactions and provides a better, more tailored, format for this niche of information."
              ghLink="https://github.com/cburl1/parki"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blockbuster Employee Portal"
              description="Engineered a comprehensive full-stack web application that would streamline operations for a Blockbuster employees. Features include the ability to view, modify, and add new movies, rentals, and client profiles. Built using React, Python with Flask and SQLite, the portal enhances operational efficiency and user experience for staff."
              ghLink="https://github.com/cburl1/music-CLI"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Music Player and Storage"
              description="Created a command-line interface application with Python and SQLAlchemy for efficient music storage and playback. This tool not only stores a user's music library but also allows for seamless playback in the browser, leveraging advanced web technologies for a user-friendly audio experience."
              ghLink="https://github.com/cburl1/blockbuster-employee-portal"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Seasonal Produce Educator"
              description="Designed a Vanilla JavaScript web application focused on educating users about the optimal consumption times for various produce. The application, developed with an emphasis on simplicity and user engagement, provides valuable insights into seasonal produce, promoting healthier eating habits."
              ghLink="https://github.com/cburl1/seasonal-produce-educator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ski Shop Storefront"
              description="Crafted an online storefront for a ski shop using ReactJS, showcasing a range of skiing products. The site features an intuitive design, easy navigation, and a seamless shopping experience, enhancing customer engagement and boosting online sales."
              ghLink="https://github.com/cburl1/skishop-react-frontend"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
