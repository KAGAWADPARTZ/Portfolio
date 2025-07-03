import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daniel Inocencio </span>
            from <span className="purple"> Iloilo City, Philippinwa.</span>
            <br />
            I am currently developing our mobile app startup.
            <br />
            I have completed my bachelor's degree in Computer Science (BSCS) at
            Iloilo Science And Technology University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Greatness comes from small beginnings!"{" "}
          </p>
          <footer className="blockquote-footer">Nathan Drake</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
