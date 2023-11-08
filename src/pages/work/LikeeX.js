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
        <p>
          Likee XDownloader is an Android app designed to help users download
          videos from the social media platform Likee.
        </p>
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
          <b>Methods</b> Competitor Analysis | Market Research |{" "}
        </p>
        <p>
          <b>Tools</b> Figma
        </p>
        <h5>Introduction</h5>
        <p>
          Likee XDownloader is an Android application designed to facilitate
          video downloads from the social media platform Likee. As the UI/UX
          Designer for this project, I collaborated closely with an Android
          Developer to create an intuitive and user-friendly experience for
          Likee users seeking to download their favorite videos.
        </p>
        <h5>Discover</h5>
        <h4>User Research</h4>
        <p>
          The design process commenced with a thorough phase of user research.
          We needed to understand the unique requirements of Likee users who
          sought to download videos. This involved analyzing the preferences of
          our target audience, such as video types, usage patterns, and the
          platforms they preferred for accessing Likee content. This research
          laid the foundation for the entire design journey.
        </p>
        <h4>Competitive Analysis</h4>
        <p>
          Concurrent with user research, we embarked on an extensive research
          phase to achieve a holistic understanding of Likee's user base, their
          preferences, and the competitive landscape. This multifaceted research
          involved a blend of market analysis, competitive assessment, and
          in-depth user behavior studies. Leveraging tools like App Annie, we
          harnessed actionable insights into user behavior, shedding light on
          opportunities for growth. Simultaneously, we conducted a thorough
          competitive analysis, scrutinizing rival apps in the market that
          offered video downloading services. This meticulous evaluation
          illuminated both the strengths and weaknesses of existing solutions,
          enriching our design process. Our overarching aim was to distinguish
          Likee XDownloader by delivering a more seamless and user-friendly
          experience, finely attuned to the evolving needs and preferences of
          our target audience.
        </p>
        <div class="projectMedia">
          <img src={likee5} alt="likee-mockup" />
        </div>

        <h4>Ideation</h4>
        <p>
          Armed with insights from user research and competitive analysis, we
          entered the ideation phase. This involved brainstorming creative ideas
          to address user needs effectively. I collaborated closely with the
          Android Developer to brainstorm functionality, feature sets, and the
          overall flow of the app. Together, we generated concepts that would
          later evolve into the app's design.
        </p>
        <h5>Prototyping</h5>
        <p>
          With a clearer understanding of the app's structure, we moved into the
          prototyping phase. The collaboration between the UI/UX Designer and
          the Android Developer was essential. Together, we created functional
          prototypes that simulated the user experience. This phase also
          involved rigorous testing, ensuring that the design not only looked
          good but also worked seamlessly on various Android devices. It was
          crucial to identify and address any usability issues and to make
          necessary refinements.
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

        <h5>Conclusion</h5>
        <p>
          My passion for UI/UX design, underscored by my experience with Likee
          XDownloader, underlines my ability to navigate the intricacies of the
          design process and craft innovative and user-friendly designs. I
          eagerly anticipate the opportunity to bring my skills, enthusiasm, and
          adaptability to a new role while continuing my journey of growth and
          learning as a designer.
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
