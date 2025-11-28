import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/MyResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4 className="resume-title">Bachelor of Science in Computer Science</h4>
              <h5 style={{ color: "#d29fff" }}>Iloilo Science And Technology University</h5>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <em>Iloilo City, Philippines</em>
              </p>
              <ul>
                <li>Completed comprehensive coursework in computer science fundamentals</li>
                <li>Specialized in software development and programming</li>
                <li>Developed strong foundation in algorithms, data structures, and system design</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4 className="resume-title">Mobile App Developer & Co-Founder</h4>
              <h5 style={{ color: "#d29fff" }}>Startup - Mobile App Development</h5>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <em>Present</em>
              </p>
              <ul>
                <li>Leading development of mobile application startup</li>
                <li>Architecting scalable solutions for mobile platforms</li>
                <li>Collaborating with team on product strategy and implementation</li>
                <li>Implementing best practices in mobile development</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Awards & Certifications</h3>
            <div className="resume-item">
              <h4 className="resume-title">DICT R6 Hack For Gov 3</h4>
              <h5 style={{ color: "#d29fff" }}>4th Place</h5>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <em>July 2024</em>
              </p>
            </div>
            <div className="resume-item">
              <h4 className="resume-title">DOST R6 AI Hackathon</h4>
              <h5 style={{ color: "#d29fff" }}>2nd Place</h5>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <em>August 2024</em>
              </p>
            </div>
            <div className="resume-item">
              <h4 className="resume-title">ISAT U KWADRA TBI TECHNOPRENEURSHIP DEMODAY</h4>
              <h5 style={{ color: "#d29fff" }}>2nd Place</h5>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <em>December 2024</em>
              </p>
            </div>
            <div className="resume-item">
              <h4 className="resume-title">Research Colloquium</h4>
              <h5 style={{ color: "#d29fff" }}>Best Research In Computer Science</h5>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <em>May 2025</em>
              </p>
            </div>
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Technologies & Tools</h3>
            <div className="resume-item">
              <h4 className="resume-title">Databases</h4>
              <ul>
                <li>MongoDB, PostgreSQL, MariaDB</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4 className="resume-title">Mobile Development</h4>
              <ul>
                <li>Android Development</li>
                <li>Cross-platform mobile solutions</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4 className="resume-title">Development Tools</h4>
              <ul>
                <li>Git, Firebase, Visual Studio Code</li>
                <li>Postman, Slack, Vercel</li>
                <li>Version control and collaboration tools</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
