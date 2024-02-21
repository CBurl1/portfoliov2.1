import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DiPython, DiJavascript1, DiReact } from "react-icons/di";
import { SiPostgresql, SiFlask } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiPython />
        <p style={{ fontSize: 'small' }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 />
        <p style={{ fontSize: 'small' }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiReact />
        <p style={{ fontSize: 'small' }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiFlask />
        <p style={{ fontSize: 'small' }}>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostgresql />
        <p style={{ fontSize: 'small' }}>PostgreSQL</p>
      </Col>
    </Row>
  );
}

export default Techstack;
