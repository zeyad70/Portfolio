import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ZIYAD MOUSA ASIRI </span>
            from <span className="purple"> Abha, Saudi Arabia.</span>
            <br />
            Holding a Bachelor's in Technical Engineering, specializing in Applied Programming and Web Development
Engineering. I have skills in web development, graphic design, UI design, and network maintenance. I aspire
to apply my practical experience and benefit from everything I have learned during my professional and
educational career, and I believe that my skills and abilities will contribute to success.

            <br />
            I have completed Bachelor's in Technical Engineering in Applied Programming and Web Development
            Engineering.
            <br />
            <br />
            
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ziyad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
