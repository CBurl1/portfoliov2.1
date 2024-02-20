import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Collin Burleigh</span> from <span className="purple">Newmarket, New Hampshire.</span>
            <br />
            <br />
            As a <span className="purple">Full-Stack Developer</span> trained at <span className="purple">The Flatiron School</span>, my path to tech was unique, shaped by a dream of professional baseball. This journey taught me leadership, teamwork, and perseverance.
            <br />
            <br />
            After shifting from sports to tech, I found my passion in coding. It offered a blend of creativity and problem-solving that I hadn't found elsewhere. This led me to pivot my career towards software development, embracing the challenges and opportunities it presents.
            <br />
            <br />
            <span className="purple">Outside of work, my passions include:</span>
          </p>
          <ul>
            <li className="about-activity">
            <span className="purple">Global Exploration:</span> Traveling to over 20 countries has broadened my perspective, enriching my understanding of diverse cultures and landscapes.
            </li>
            <br />
            <li className="about-activity">
            <span className="purple">Skiing:</span> A newfound love, skiing connects me with nature and offers thrilling challenges.
            </li>
            <br />
            <li className="about-activity">
            <span className="purple">Coaching:</span> Coaching youth baseball allows me to give back and share the lessons learned from my own experiences.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
