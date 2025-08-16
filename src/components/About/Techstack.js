import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DiPython, DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { SiPostgresql, SiFlask, SiSqlite, SiElectron, SiTailwindcss, SiAmazonaws } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <DiPython />
        <p style={{ fontSize: 'small' }}>Python</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <DiJavascript1 />
        <p style={{ fontSize: 'small' }}>JavaScript</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <DiReact />
        <p style={{ fontSize: 'small' }}>React</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiFlask />
        <p style={{ fontSize: 'small' }}>Flask</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiPostgresql />
        <p style={{ fontSize: 'small' }}>PostgreSQL</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiSqlite />
        <p style={{ fontSize: 'small' }}>SQLite</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiElectron />
        <p style={{ fontSize: 'small' }}>Electron</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <DiHtml5 />
        <p style={{ fontSize: 'small' }}>HTML5</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <DiCss3 />
        <p style={{ fontSize: 'small' }}>CSS3</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiTailwindcss />
        <p style={{ fontSize: 'small' }}>Tailwind</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiAmazonaws />
        <p style={{ fontSize: 'small' }}>AWS</p>
      </Col>
    </Row>
  );
}

export default Techstack;
