import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ width: "100%" }}>
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{ 
          height: "200px", 
          objectFit: "cover",
          objectPosition: "center"
        }} 
      />
      <Card.Body style={{ 
        padding: "1.25rem", 
        display: "flex", 
        flexDirection: "column",
        flex: "1"
      }}>
        <Card.Title style={{ 
          marginBottom: "1rem", 
          fontSize: "1.1rem", 
          lineHeight: "1.3",
          height: "2.6rem",
          display: "flex",
          alignItems: "center"
        }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ 
          textAlign: "left", 
          fontSize: "0.9rem", 
          lineHeight: "1.4", 
          marginBottom: "1.5rem",
          flex: "1",
          minHeight: "140px",
          display: "flex",
          alignItems: "flex-start"
        }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
        
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
        
        {/* Render second demo button (for video demos) */}
        {!props.isBlog && props.videoDemo && (
          <Button
            variant="primary"
            href={props.videoDemo}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsPlayCircle /> &nbsp;
            Demo Video
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
