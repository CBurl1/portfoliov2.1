import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.css"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
          <div class="horizontal-line"></div>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span>
            </h1>
            <p className="home-about-body">
            Skilled <span className="purple"> Full-Stack Developer </span>
             and certified <span className="purple">SCRUM</span> master with a knack for turning complex challenges into scalable web solutions. Expierince crafting AI driven applications. Poised to release a transformative Magento 2 extension designed to revolutionize Magento's inventory management process. Passionately pursuing new technological advancements to drive innovation.
            <br />
            <br />I am proficent working with a large amount of tech including
              <i>
                <b className="purple"> Python, Javascript, Flask, JWT and PostgreSQL. </b>
              </i>
              <br />
              <br />
              I am interested in building new&nbsp;
              <i>
                <b className="purple">Web Applications</b>. Specifically,
                those relating to{" "}
                <b className="purple">
                  E-commerce and AI.
                </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cburl1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/burleighcollin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/collin.burleigh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
