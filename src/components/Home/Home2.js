import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
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
            Technical professional experienced in designing, developing, and maintaining <span className="purple">SaaS and desktop applications</span>. 
            Skilled in developing scalable applications, building robust APIs, and optimizing performance across back-end, front-end, and cloud environments. 
            The solo developer behind <span className="purple">M2 InstaCount</span> and <span className="purple">AutoSortPro</span> - applications serving 100+ customers.
            <br />
            <br />I am proficient working with a comprehensive tech stack including
              <i>
                <b className="purple"> Python, Flask, JavaScript, ReactJS, SQL, PostgreSQL, SQLite, AWS, and Electron. </b>
              </i>
              <br />
              <br />
              I specialize in building&nbsp;
              <i>
                <b className="purple">SaaS Applications</b> and{" "}
                <b className="purple">
                  AI-powered solutions
                </b>
              </i>
              , with experience integrating OpenAI API, Auth0, Stripe API, and AWS services.
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
            <h1>Let's <span className="purple">Connect:</span></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:me@collinburleigh.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
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
