import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/MyResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import AchievementCard from "./AchievementCard";
import AiHackathon from "../../Assets/Achievements/AiHackathon.jpg";
import DemoDay from "../../Assets/Achievements/DemoDay.jpg";
import Hack4Gov3 from "../../Assets/Achievements/Hack4Gov3.jpg";
import Hack4Gov4 from "../../Assets/Achievements/Hack4Gov4.jpg";
import BestResearch from "../../Assets/Achievements/BestResearch.jpg";

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
              <h5>Iloilo Science And Technology University</h5>
              <p>
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
              <h5>Startup - Mobile App Development</h5>
              <p>
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
        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={12}>
            <h3 className="resume-title" style={{ textAlign: "center", marginBottom: "30px" }}>
              Achievements
            </h3>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={Hack4Gov3}
              title="Hack4Gov3"
              date="07-24-2024"
              location="Park Inn Hotel, Iloilo City"
              details={[
                "1st & 6th Place (Participant)",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={AiHackathon}
              title="DOST Ai Hackathon"
              date="08-24-2025"
              location="University Of Antique, Antique"
              details={[
                "2nd Place"
              ]}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={DemoDay}
              title="Technopreneurship Demo Day"
              date="12-17-2024"
              location="Diversion 21 Hotel, Iloilo City"
              details={[
                "2nd Place"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={BestResearch}
              title="Research Colloquium"
              date="05-22-2025"
              location="ISAT-University, Iloilo City"
              details={[
                "Best In Research (Technology)"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={Hack4Gov4}
              title="Hack4Gov4"
              date="10-20-2025"
              location="Vermillion Hotel, Iloilo City"
              details={[
                "1st Place (Mentor)"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
