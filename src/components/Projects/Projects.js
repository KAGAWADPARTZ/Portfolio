import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Coop from"../../Assets/Projects/Coop.png";
import Proventous from "../../Assets/Projects/Proventous.png";
import LaundryApp from "../../Assets/Projects/LaundryApp.jpg";
import MoneySaver from "../../Assets/Projects/MoneySaver.png"
import Worka from "../../Assets/Projects/Worka.png"
import Xcess from "../../Assets/Projects/Xcess.jpg";  
import Thribo from "../../Assets/Projects/Thribo.jpg"; 
import ProjectAG from "../../Assets/Projects/ProjectAG.png"; 

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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MoneySaver}
              isBlog={false}
              title="MoneySaver"
              description="An intuitive expense tracking app that helps you monitor spending, create budgets, and identify savings opportunities. Features visual reports and personalized insights to build better financial habits."
              // ghLink="https://github.com/KAGAWADPARTZ/MoneySaver"
              demoLink="https://money-saver-i8ub.vercel.app"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Worka}
              isBlog={false}
              title="Worka"
              description="A HRMS web and mobile apps for managing employees, attendance, Geofence & IP-based, tasks with Kanban boards, team chat, and documents. Multi-tenant support with admin dashboard and employee portal."
              // ghLink="https://github.com/KAGAWADPARTZ/valentine"
              demoLink="https://worka.bblabs.dev/auth/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LaundryApp}
              isBlog={false}
              title="Laundry App"
              description="A convenient laundry service app for booking pickup and delivery of washing and dry cleaning. Get your laundry done without leaving home - like Grab, but for your clothes!"
              ghLink="https://github.com/KAGAWADPARTZ/LaundryShop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Xcess}
              isBlog={false}
              title="Xcess"
              description="A peer-to-peer VPN solution that creates secure, direct connections between two users. Enables private data sharing, gaming, and remote collaboration within a protected digital tunnel."
              customFooter="Our Thesis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coop}
              isBlog={false}
              title="Mini Coop"
              description="An online convenience store app bringing your local sari-sari store experience to your fingertips. Order daily essentials, snacks, beverages, and household items with home delivery."
              demoLink="https://isatu-coop.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Proventous}
              isBlog={false}
              title="Proventous"
              description="A dual-purpose platform combining intelligent job matching for job seekers with comprehensive workforce management tools for companies, covering the complete employee lifecycle."      
              demoLink="https://proventous.com"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Thribo}
              isBlog={false}
              title="T.H.I.R.I.B.O"
              description="A sensory processing screening tool that evaluates six key domains (touch, proprioception, vestibular, auditory, vision, taste/smell to help identify if individuals may need medical consultation."      
              // demoLink="https://proventous.com" 
              customFooter="Internship Project"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectAG}
              isBlog={false}
              title="Project AG"
              description="A CTF (Capture The Flag) website and project dedicated to restoring cybersecurity awareness in Iloilo City. Provides hands-on security challenges and educational resources to strengthen the local cybersecurity community."      
              demoLink="https://project-ag.org" 
              // customFooter="Internship Project"     
            />
          </Col>
        </Row>
      </Container>    
    </Container>
  );
}

export default Projects;
