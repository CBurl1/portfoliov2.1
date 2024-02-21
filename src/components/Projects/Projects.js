import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import musicPlayer from "../../Assets/Projects/music-player.png";
import parkiImage from "../../Assets/Projects/parki_image.png";
import ski from "../../Assets/Projects/ski_shop_image.png";
import produce from "../../Assets/Projects/produce_wall.png";
import block from "../../Assets/Projects/blockbuster-project-image.png";
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
              imgPath={m2}
              isBlog={false}
              title="M2 InstaCount"
              description="Crafted M2 InstaCount for Magento 2 stores using React, Flask, PostgreSQL, and JWT. This app simplifies inventory with real-time tracking, barcode/SKU identification, image verification, discrepancy reports, and Magento export integration."
              // ghLink="https://github.com/cburl1/mrti"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkiImage}
              isBlog={false}
              title="Parki - Ski/Snowboard App"
              description="Developed a web app for skiers/snowboarders with updates on terrain parks using React, Python, Flask, SQLite. Offers real-time info and user interaction, enhancing the winter sports experience with a tailored format for niche information."
              ghLink="https://github.com/cburl1/parki"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={block}
              isBlog={false}
              title="Blockbuster Employee Portal"
              description="Engineered a Blockbuster operations web app with React, Flask, SQLite. Enables viewing, modifying movies, rentals, and profiles, boosting operational efficiency and staff user experience."
              ghLink="https://github.com/cburl1/music-CLI"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPlayer}
              isBlog={false}
              title="Music Player and Storage"
              description="Created a Python and SQLAlchemy CLI app for music storage and playback. Stores music libraries and enables seamless browser playback, leveraging web technologies for a user-friendly audio experience."
              ghLink="https://github.com/cburl1/blockbuster-employee-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={produce}
              isBlog={false}
              title="Seasonal Produce Educator"
              description="Designed a Vanilla JavaScript app on optimal produce consumption times. Emphasizes simplicity, user engagement, and provides insights into seasonal produce, promoting healthier eating habits."
              ghLink="https://github.com/cburl1/seasonal-produce-educator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ski}
              isBlog={false}
              title="Ski Shop Storefront"
              description="Crafted a React online storefront for a ski shop. Showcases skiing products with intuitive design, easy navigation, and a seamless shopping experience, enhancing customer engagement and sales."
              ghLink="https://github.com/cburl1/skishop-react-frontend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
