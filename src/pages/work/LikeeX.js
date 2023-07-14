import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import { Icon } from "@iconify/react";

import likee from "../../images/likee-banner.png";
import likee1 from "../../images/likee1.webp";
import likee2 from "../../images/likee2.webp";
import likee3 from "../../images/likee3.webp";
import likee4 from "../../images/likee-mockup.png";
import likee5 from "../../images/likee-appannie.png";

export default function LikeeX() {
  return (
    <Container className="myProject">
      <Row>
        <div className="hoverUnderline backDiv">
          <Nav.Link className="p" as={NavLink} to="/work">
            <Icon style={{ fontSize: "36px" }} icon="bx:arrow-back" /> Back
          </Nav.Link>
        </div>
        <img src={likee} alt="Likee Video Downloader Android App Development" />
        <h1 className="mb-3">/Likee XDownloader</h1>
        <h6 className="mb-3">UI/UX Design</h6>
        <p>Likee XDownloader is an Android app designed to help users download
          videos from the social media platform Likee.</p>
        <p>
          <b>Role</b> UI/UX Designer{" "}
        </p>
        <p>
          <b>Team Member </b> 1 Android Developer{" "}
        </p>
        <p>
          <b>Duration</b> May 2020 – August 2020{" "}
        </p>
        <p>
          <b>Methods</b> Competitor Analysis | Market Research | {" "}
        </p>
        <p>
          <b>Tools</b> Figma
        </p>

        <h5>Discover</h5>
        <p>
          To begin, I conducted extensive research to understand Likee's user
          base, their needs and preferences, and the competitive landscape. This
          research involved market research and competitive analysis. I used app
          analytic tools like App Annie to analyze user behavior and identify
          opportunities for growth. From this research, I gained valuable
          insights into user behavior and preferences, which informed the design
          of the app.
        </p>
        <div class="projectMedia">
          <img src={likee5} alt="likee-mockup" />
        </div>

        <h5>Ideation</h5>
        <p>
          Using the insights gathered from my research, I began the ideation
          phase, which involved brainstorming ideas and creating initial
          wireframes and user flows. I used Figma to create wireframes, which
          allowed me to quickly iterate and refine my designs based on user
          feedback.
        </p>
        <h5>Prototyping</h5>
        <p>
          Once I had a solid understanding of the user needs and the app's
          functionality, I created prototypes that allowed me to test and refine
          the design. I worked closely with the Android engineer to ensure that
          the layout and functions were seamless, and I provided responsive
          testing to ensure that the app worked smoothly on a range of devices.
        </p>
        <div class="projectMedia">
          <img src={likee4} alt="likee-mockup" />
        </div>

        <h5>Lessons Learned</h5>
        <p>
          Throughout this project, I learned the importance of being adaptable
          and willing to take on a range of tasks. As someone with no previous
          experience in UI design, I quickly became proficient in Figma and was
          able to create a polished and professional UI for Likee XDownloader. I
          also developed my skills in developer assistance, marketing research,
          and visual content creation, making me a versatile and valuable member
          of any design team.
        </p>
        <p>
          I am passionate about UI/UX design and believe that my experience with
          Likee XDownloader demonstrates my ability to follow a design thought
          process and create innovative and user-friendly designs. I am excited
          to bring my skills and enthusiasm to a new role and to continue
          learning and growing as a designer.
        </p>
        <h5>Google Play Video</h5>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/dFrU06P7xPo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
          <Col lg={2}>
            <div class="projectMedia">
              <img src={likee1} alt="likee-app" />
            </div>
          </Col>
          <Col lg={2}>
            <div class="projectMedia">
              <img src={likee2} alt="likee-share" />
            </div>
          </Col>
          <Col lg={2}>
            <div class="projectMedia">
              <img src={likee3} alt="likee-gallery" />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="hoverUnderline backDiv">
            <Nav.Link as={NavLink} to="/work">
              <Icon style={{ fontSize: "36px" }} icon="bx:left-arrow-alt" />{" "}
              Back
            </Nav.Link>
          </div>
        </Row>
        <Footer />
      </Row>
    </Container>
  );
}
