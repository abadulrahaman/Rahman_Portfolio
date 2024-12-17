import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MD RAHMAN RAIN </span>
            from <span className="purple"> Janakpur, Nepal.</span>
            <br />
            I am currently Learning Bachelor of Computer Application (BCA) in Rajarshi Janak University.
            <br />
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is not perfect, just like life. But sometimes, imperfection is necessary to achieve the bigger picture."{" "}
          </p>
          <footer className="blockquote-footer">Abadul Rahman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
