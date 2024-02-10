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
            As a <span className="purple">Full-Stack Developer</span> with training from <span className="purple">The Flatiron School</span>, my journey to software development was unconventional yet profoundly transformative. Prior to my coding career, I pursued a lifelong dream of becoming a professional baseball player. Despite the challenges and ultimate redirection of this dream, I garnered invaluable soft skills and a relentless drive from two decades of team sports. These experiences instilled in me the principles of leadership, teamwork, sacrifice, and perseverance.
            <br />
            <br />
            Transitioning from a focus on athletics to academia, I initially continued working on a business degree, only to discover my true passion lay within the realms of coding, captivated by its promise of freedom and creativity. This realization prompted a pivotal decision to leave college and enroll in a coding bootcamp, a choice that has since filled my career with enthusiasm and fulfillment.
            <br />
            <br />
            <span className="purple">Beyond my professional endeavors, I am deeply passionate about:</span>
          </p>
          <ul>
          <li className="about-activity">
            <strong>Global Exploration and Personal Growth:</strong>
            <br />
            My adventures have taken me to over 20 countries, from the natural beauty of Costa Rica to the urban sophistication of Singapore, and across the diverse landscapes of Western Europe. These journeys, undertaken with family and friends, have enriched my life, expanding my horizons and deepening my appreciation for the world's vast cultural and geographical diversity.          </li>
            <br />
            <li className="about-activity">
            <strong>Adventure on the Slopes - Skiing as My New Frontier:</strong>
            <br />
            Discovering skiing has opened a new chapter of athletic pursuit, where challenging terrains like Corbet's Couloir at Jackson Hole provide not just thrill but a profound connection with nature, friends, and family.
            </li>
            <br />
            <li className="about-activity">
            <strong>Community Contribution through Coaching:</strong> 
            <br />
            Serving as an assistant coach for my former high school's baseball team allows me to give back to the community that shaped my early years. I strive to inspire confidence and impart lasting wisdom to young athletes, continuing the legacy of mentorship that was pivotal in my own development.
            </li>
          </ul>

          <p className = "purple">
            "When looking for ideas, start with problems"{" "}
          </p>
          <footer className="purple">-CB</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
