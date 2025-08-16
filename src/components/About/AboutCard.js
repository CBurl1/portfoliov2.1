import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I'm <span className="purple">Collin Burleigh</span>, a <span className="purple">Software Engineer</span> specializing in <span className="purple">SaaS and desktop applications</span>.
            <br />
            <br />
            As a freelance developer since June 2023, I've built and supported applications serving <span className="purple">100+ customers</span>. I'm the solo developer behind <span className="purple">M2 InstaCount</span> and <span className="purple">AutoSortPro</span>, which have improved efficiency by 30-35% for businesses.
            <br />
            <br />
            My expertise spans <span className="purple">full-stack development</span>, from building robust APIs with Python and Flask to creating responsive frontends with React. I also have experience with <span className="purple">AI integrations</span>, having worked with OpenAI APIs and built smart automation solutions.
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
