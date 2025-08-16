import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFigma,
  SiWarp,
  SiGit,
  SiJira,
  SiStripe,
  SiAuth0,
  SiOpenai,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiMacos />
        <p style={{ fontSize: 'small' }}>macOS</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiVisualstudiocode />
        <p style={{ fontSize: 'small' }}>VS Code</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiWarp />
        <p style={{ fontSize: 'small' }}>Warp</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiPostman />
        <p style={{ fontSize: 'small' }}>Postman</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiFigma />
        <p style={{ fontSize: 'small' }}>Figma</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiGit />
        <p style={{ fontSize: 'small' }}>Git</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiJira />
        <p style={{ fontSize: 'small' }}>Jira</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiAuth0 />
        <p style={{ fontSize: 'small' }}>Auth0</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiStripe />
        <p style={{ fontSize: 'small' }}>Stripe</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiOpenai />
        <p style={{ fontSize: 'small' }}>OpenAI</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiVercel />
        <p style={{ fontSize: 'small' }}>Vercel</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiSlack />
        <p style={{ fontSize: 'small' }}>Slack</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
