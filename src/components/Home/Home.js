import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Particle from "../Particle";
import HeroVisual from "./HeroVisual";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <p className="hero-kicker">
                Technical support · SaaS · automation
              </p>

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm <strong className="main-name">Collin Burleigh</strong>
              </h1>

              <div style={{ padding: "32px 0 16px 50px", textAlign: "left" }}>
                <Type />
              </div>

              <div className="home-cta-row">
                <Link to="/project" className="btn-gradient">
                  <AiOutlineFundProjectionScreen />
                  View Projects
                  <AiOutlineArrowRight />
                </Link>
                <Link to="/resume" className="btn-ghost">
                  <CgFileDocument />
                  View Resume
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <HeroVisual />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
