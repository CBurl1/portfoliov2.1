import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsPlayCircle } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ width: "100%" }}>
      <div className="project-card-imagewrap">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            height: "210px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <span className="project-card-image-shade" aria-hidden="true" />
      </div>

      <Card.Body
        style={{
          padding: "1.4rem",
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <Card.Title
          style={{
            marginBottom: "0.75rem",
            fontSize: "1.15rem",
            lineHeight: "1.3",
            minHeight: "2.6rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.title}
        </Card.Title>

        <Card.Text
          style={{
            textAlign: "left",
            fontSize: "0.92rem",
            lineHeight: "1.55",
            marginBottom: "1rem",
            flex: "1",
          }}
        >
          {props.description}
        </Card.Text>

        {Array.isArray(props.tags) && props.tags.length > 0 && (
          <div className="project-tags">
            {props.tags.map((t) => (
              <span className="project-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="project-actions">
          {props.showGitHub !== false && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;{props.buttonText || "Demo"}
            </Button>
          )}

          {!props.isBlog && props.videoDemo && (
            <Button variant="primary" href={props.videoDemo} target="_blank">
              <BsPlayCircle /> &nbsp;Demo Video
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
