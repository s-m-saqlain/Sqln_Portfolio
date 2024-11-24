import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import leaf from "../../Assets/Projects/mariya.png";
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
              description="Developed a job aggregation platform for the pharmaceutical industry that scrapes job listings from LinkedIn, Indeed, and other pharma-specific job boards. The data is stored in a database and updated daily through a cron job. An admin panel was also created, allowing administrators to add or remove job postings, manage registered users, and view comments on the jobs listed on the platform."
              ghLink="https://github.com/s-m-saqlain/Job-Tracker-Admin-Panel"
              demoLink="https://job-tracker-admin-panel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Billing Payments"
              description="Contributed to the Family Hub project by developing the Family Handbook module. This platform enables users to create a personalized handbook for their family, featuring modules for a cover page, introduction, family member profiles, vision and mission statements, constitution, summary and etc. Users can select from various templates and designs to customize their handbook. The project includes generating tailored, written documents that reflect family identification and values, with the final product being a professionally formatted PDF generated from the backend."
              ghLink="https://github.com/s-m-saqlain/Billing-Payments"
              demoLink="https://billing-payments.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Invest in theFuture Of Financewith SocialTrader"
              description="Built an e-commerce platform supporting multi-user registration for buyers and sellers. Integrated Stripe for secure online payments, ensuring smooth and safe financial transactions. Created an admin panel for user management, product oversight, and transaction monitoring, enhancing administrative control."
              ghLink="https://github.com/s-m-saqlain/Social_Trader"
              demoLink="https://social-trader-ruddy.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Construction"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://construction-gamma-two.vercel.app/"
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
