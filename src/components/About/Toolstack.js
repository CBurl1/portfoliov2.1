import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFigma,
  SiJekyll,
  SiWarp,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMacos />
        <p style={{ fontSize: 'small' }}>macOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode />
        <p style={{ fontSize: 'small' }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiWarp />
        <p style={{ fontSize: 'small' }}>Warp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostman />
        <p style={{ fontSize: 'small' }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiFigma />
        <p style={{ fontSize: 'small' }}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiJekyll />
        <p style={{ fontSize: 'small' }}>Jekyll</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVercel />
        <p style={{ fontSize: 'small' }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiSlack />
        <p style={{ fontSize: 'small' }}>Slack</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
