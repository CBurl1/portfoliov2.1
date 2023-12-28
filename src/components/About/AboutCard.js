import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Collin Burleigh </span>
            from <span className="purple"> Newmarket, New Hampshire.</span>
            <br />
            <br />
            I am the owner and creator of M2 InstaCount. I freelance as well.
            <br />
            <br />
            I graduated from The Flatiron School in early 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Skiing
            </li>
            <li className="about-activity">
              <ImPointRight /> Coaching Baseball
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When looking for ideas, start with problems"{" "}
          </p>
          <footer className="blockquote-footer">Collin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
