import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AboutVisual from "./AboutVisual";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <div className="horizontal-line"></div>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span>
            </h1>
            <p className="home-about-body">
              <span className="purple">Technical Support Engineer</span> with hands-on experience
              supporting <span className="purple">SaaS and ecommerce systems</span> in production.
              I've supported roughly <span className="purple">140 users</span> across self-built
              applications — handling onboarding, issue resolution, workflow questions, and product
              fixes.
              <br />
              <br />
              I work fluently across the stack, using{" "}
              <i>
                <b className="purple">
                  Python, Flask, FastAPI, JavaScript, React, PostgreSQL, SQLite, and Electron
                </b>
              </i>{" "}
              to reproduce bugs, investigate issues via API responses, logs, and database checks,
              and ship fixes end-to-end.
              <br />
              <br />
              I'm experienced integrating{" "}
              <i>
                <b className="purple">Auth0, Stripe, OpenAI, Magento 2, and AWS</b>
              </i>{" "}
              (IAM, S3, SES, Rekognition) — and strong at closing tickets clearly for
              non-technical users.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <AboutVisual />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-value">~140</div>
                <div className="stat-label">Users supported</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">2</div>
                <div className="stat-label">SaaS products shipped &amp; supported</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Let's <span className="purple">Connect:</span>
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:me@collinburleigh.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/burleighcollin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/cburl1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
