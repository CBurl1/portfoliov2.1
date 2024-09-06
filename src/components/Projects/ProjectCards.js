import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        
        {/* Render GitHub button only if showGitHub prop is true */}
        {props.showGitHub !== false && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        
        {/* Space between buttons if both are rendered */}
        {props.showGitHub !== false && props.demoLink && !props.isBlog && " "}
        
        {/* Render Demo/Live button with custom text */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.showGitHub !== false ? "10px" : "0" }}
          >
            <CgWebsite /> &nbsp;
            {props.buttonText || "Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
