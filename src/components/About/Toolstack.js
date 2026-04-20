import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiJira,
  SiPostman,
  SiPytest,
  SiJest,
  SiElectron,
  SiMagento,
  SiAuth0,
  SiStripe,
  SiOpenai,
  SiAmazonaws,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiGit />
        <p style={{ fontSize: 'small' }}>Git</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiJira />
        <p style={{ fontSize: 'small' }}>Jira</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiPostman />
        <p style={{ fontSize: 'small' }}>Postman</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiPytest />
        <p style={{ fontSize: 'small' }}>PyTest</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiJest />
        <p style={{ fontSize: 'small' }}>Jest</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiElectron />
        <p style={{ fontSize: 'small' }}>Electron</p>
      </Col>
      <Col xs={6} sm={4} lg={3} xl={2} className="tech-icons text-center">
        <SiMagento />
        <p style={{ fontSize: 'small' }}>Magento 2</p>
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
        <SiAmazonaws />
        <p style={{ fontSize: 'small' }}>AWS</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
