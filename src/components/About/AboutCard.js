import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Saqlain </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am currently employed as a Front-End Vue-JS, Nuxt-JS developer at
            5Cube.
            <br />
            I am an undergraduate pursuing a Bachelor of Science in Business
            Information Technology from Virtual University.
            <br />
            <br />
            My activities are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Web Application
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saqlain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
