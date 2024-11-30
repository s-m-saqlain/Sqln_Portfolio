import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import leaf from "../../Assets/Projects/mariya.png";
import slider from "../../Assets/Projects/slider.png";
import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import editor from "../../Assets/Projects/social.png";
// import chatify from "../../Assets/Projects/chatify.png";
import chatify from "../../Assets/Projects/chatify1.png";
import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import bitsOfCode from "../../Assets/Projects/billing.png";

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
              title="Pharma Career Hub"
              description="Led the development of a robust job aggregation platform tailored for the pharmaceutical industry, utilizing Nuxt.js, the Composition API, and TypeScript an admin panel was developed, enabling administrators to manage job postings, oversee registered users, and moderate comments on job listings, ensuring comprehensive management and user engagement."
              ghLink="https://github.com/s-m-saqlain/Job-Tracker-Admin-Panel"
              demoLink="https://job-tracker-admin-panel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Billing Payments"
              description="Converted Figma designs into fully responsive and dynamic applications using Vue.js, Nuxt.js, Tailwind CSS, the Composition API, and TypeScript. Developed optimized layouts to ensure seamless user experiences across all devices, including mobile, tablet, and desktop, by leveraging the responsive capabilities of Tailwind CSS within the Vue.js and Nuxt.js frameworks."
              ghLink="https://github.com/s-m-saqlain/Billing-Payments"
              demoLink="https://billing-payments.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Invest in theFuture Of Financewith SocialTrader"
              description="Transformed Figma designs into highly responsive and interactive applications using Vue.js, Nuxt.js, Tailwind CSS, TypeScript, and the Composition API. Created adaptive layouts to deliver consistent and user-friendly experiences  Additionally, developed a custom comment box using Tailwind CSS to enhance user interaction and feedback capabilities."
              ghLink="https://github.com/s-m-saqlain/Social_Trader"
              demoLink="https://social-trader-ruddy.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Construction"
              description="Transformed Figma designs into dynamic, fully responsive applications utilizing Vue.js, Nuxt.js, Tailwind CSS, the Composition API, and TypeScript. Designed and implemented layouts optimized for seamless user experiences across all devices, including mobile, tablet, and desktop, by leveraging Tailwind CSS's responsive features within Vue.js and Nuxt.js. Also developed an elegant and interactive box component with dynamic hover effects, enhancing user engagement."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://construction-gamma-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slider}
              isBlog={false}
              title="5cube"
              description="In this project, I developed the complete website for my company, 5Cube, using Nuxt.js (Composition API), TypeScript, and Tailwind CSS. The website features a sophisticated slider, a services page with interactive buttons that dynamically scroll to display different components within the page, and a fully functional contact us page. For the contact page, I implemented a Vue library to create a dropdown showcasing a comprehensive list of international phone codes with corresponding flags. Additionally, checkboxes are designed to be responsive, transforming into dropdowns on laptop and mobile screens. Selected options from the dropdown appear in the input fields alongside a cancel SVG icon, allowing users to remove selections easily. (The website is currently in progress and not yet fully launched.)"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://5cube.io/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
