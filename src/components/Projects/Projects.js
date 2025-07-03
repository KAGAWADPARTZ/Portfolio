import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Coop from"../../Assets/Projects/Coop.png";
import NewYear from "../../Assets/Projects/NewYear.png";
import LaundryApp from "../../Assets/Projects/LaundryApp.jpg";
import MoneySaver from "../../Assets/Projects/MoneySaver.png"
import ValentineCard from "../../Assets/Projects/ValentineCard.png"
import Xcess from "../../Assets/Projects/Xcess.jpg";  

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
              imgPath={ValentineCard}
              isBlog={false}
              title="Valentine Card"
              description="Looking for a quick way to share your affection? Valentine Card provides a charming, static digital card, designed for effortless sharing. It's the perfect, straightforward way to send a sweet Valentine's message to someone special."
              ghLink="https://github.com/KAGAWADPARTZ/valentine"
              demoLink="https://valentine-three-chi.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LaundryApp}
              isBlog={false}
              title="Laundry App"
              description="You can easily book pickup and delivery for all your washing and dry cleaning needs, giving you back precious time. It's the Grab experience, but for your dirty clothes! Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
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
              imgPath={NewYear}
              isBlog={false}
              title="NewYearCss"
              description="NewYearCSSs is a collection of beautifully crafted, minimalist New Year's greetings built purely with CSS. This project showcases the power of clean code and subtle animations to create festive and modern designs. Perfect for adding a touch of holiday cheer to websites, digital cards, or UI elements, NewYearCSSs provides a lightweight and visually appealing way to wish everyone a Happy New Year."      
              demoLink="https://try-my-14.netlify.app"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
