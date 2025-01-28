import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/6.png";
import emotion from "../../Assets/Projects/0.png";
import editor from "../../Assets/Projects/22.png";
import chatify from "../../Assets/Projects/3.png";
import suicide from "../../Assets/Projects/44.png";
import bitsOfCode from "../../Assets/Projects/1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Exam Management System"
              description="Developed a platform for managing teachers, students, and exams."
              demoLink="https://ziyad-laundryservices.wuaze.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="laundryservices"
              description="A practical and efficient web design tailored for a cleaning requests management system. The interface features a clean layout with organized sections for request tracking, staff assignment, and scheduling. It emphasizes simplicity and ease of use, with colors like blue and green to convey professionalism and reliability."
              demoLink="https://ziyad-laundryservices.wuaze.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Health Food UI"
              description="A clean and refreshing design interface inspired by a healthy lifestyle. It features natural colors like green and white, with visuals of fresh foods and nutritional elements, emphasizing the importance of balanced nutrition and promoting a sense of vitality and energy."
              demoLink="https://www.figma.com/proto/F4bY585Nw8ahEiSac8NPoq/%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A?node-id=8645-431"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Brochure"
              description="Graphic Design."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Managing Expenses UI"
              description="A simple and engaging app design for managing expenses tailored for young students. It features a user-friendly interface with vibrant shades of blue, clear icons, and interactive tools to help students track their spending and learn financial responsibility in a fun and accessible way."
              demoLink="https://www.figma.com/proto/3OYkC36ulRKaGCC126xA2F/%D9%85%D8%B5%D8%B1%D9%88%D9%81?node-id=1-3&t=e6imReYF5UwVORvX-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Brochure"
              description="Graphic Design."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
