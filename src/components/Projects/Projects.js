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
              imgPath={MoneySaver}
              isBlog={false}
              title="MoneySaver"
              description="Money Saver is your ultimate partner in achieving financial peace. Our intuitive app makes it simple to track every expense, create realistic budgets, and identify areas where you can save more. With clear visual reports and personalized insights, you'll gain a complete understanding of your spending habits and watch your savings grow faster than ever. Start building a secure financial future today!"
              ghLink="https://github.com/KAGAWADPARTZ/MoneySaver"
              demoLink="https://money-saver-i8ub.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Worka}
              isBlog={false}
              title="Worka"
              description="Worka is a Human Resource Management System for organizations to manage employees, attendance, tasks, and operations. The web application provides an admin dashboard and employee portal with multi-tenant support, while the mobile app offers on-the-go access. Key features include attendance tracking Geofence, IP-based, task management with Kanban boards, team chat, document management. The system supports both web and mobile access for HR management."
              // ghLink="https://github.com/KAGAWADPARTZ/valentine"
              demoLink="https://worka.bblabs.dev/auth/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LaundryApp}
              isBlog={false}
              title="Laundry App"
              description="You can easily book pickup and delivery for all your washing and dry cleaning needs, giving you back precious time. It's the Grab experience, but for your dirty clothes! Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage."
              ghLink="https://github.com/KAGAWADPARTZ/LaundryShop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Xcess}
              isBlog={false}
              title="Xcess"
              description="Allowing two users to establish a direct and secure VPN connection. Go beyond traditional VPNs by creating a private tunnel where you can seamlessly share data packets and collaborate without compromising security. Whether for gaming, secure file transfer, or specialized remote work, Xcess provides a robust and efficient way for two individuals to interact within a protected digital space."
              customFooter="Our Thesis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coop}
              isBlog={false}
              title="Mini Coop"
              description="Welcome to Online Coop, the convenient web app that brings the familiar comfort of your local sari-sari store right to your fingertips. Get all your daily essentials, snacks, beverages, and household needs delivered right to your door. No more leaving home – just browse, click, and enjoy the ease of shopping for your everyday favorites, online!"
              demoLink="https://isatu-coop.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Proventous}
              isBlog={false}
              title="Proventous"
              description="Proventous is a comprehensive job finding platform AND company management system that revolutionizes how companies manage their workforce while connecting job seekers with opportunities. The platform combines intelligent job matching with complete employee lifecycle management."      
              demoLink="https://proventous.com"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Thribo}
              isBlog={false}
              title="T.H.I.R.I.B.O"
              description="Thribo is a sensory processing screening tool that helps identify whether individuals may need medical consultation based on their sensory processing patterns. The app evaluates six key sensory domains—touch, proprioception, vestibular, auditory, vision, and taste/smell—through an intuitive rating system, providing insights that can guide users toward appropriate medical care when needed."      
              // demoLink="https://proventous.com" 
              customFooter="Internship Project"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
