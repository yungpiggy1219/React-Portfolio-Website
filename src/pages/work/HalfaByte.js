import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Icon } from "@iconify/react";

import hbBanner from "../../images/halfbyte-banner.png";
import hbLogic from "../../images/halfbyte-logic.png";
import hbCardFace from "../../images/halfbyte-cardface.png.png";
import hbCardBack from "../../images/halfbyte-cardback.png";
import hbCardDesign from "../../images/halfbyte-carddesign.png";
import hbRender1 from "../../images/halfbyte-box.png";
import hbRender2 from "../../images/halfbyte-openbox.png";
import hbRender3 from "../../images/halfbyte-openbox2.png";

export default function HalfaByte() {
  return (
    <Container className="myProject">
      <Row>
        <div className="hoverUnderline backDiv">
          <Nav.Link className="p" as={NavLink} to="/work">
            <Icon style={{ fontSize: "36px" }} icon="bx:arrow-back" /> Back
          </Nav.Link>
        </div>
        <img src={hbBanner} alt="Half Byte Board Game Development" />
        <h1 className="mb-3">/Half Byte! -It's a Nybble</h1>
        <h6 className="mb-3">Board Game Development</h6>
        <p>Half Byte is a fast pace card game.</p>
        <p>
          <b>Role</b> Board Game Designer{" "}
        </p>
        <p>
          <b>Team Member </b> Solo Project{" "}
        </p>
        <p>
          <b>Duration</b> August 2020 | August 2023{" "}
        </p>
        <p>
          <b>Tools</b> Adobe Dimesion | Figma | Illustrator | Blender
        </p>

        <h5>Introduction</h5>
        <p>
          Half Byte is a fast-paced card game that I have personally designed,
          developed, and playtested. This project marks my foray into board game
          design and has allowed me to explore a range of design tools and
          concepts. The game was envisioned to be not only engaging but also
          educational, with a focus on teaching players the fundamentals of
          Boolean algebra. This case study details the journey from conception
          to execution and shares insights from the playtesting and crowdfunding
          experiences.
        </p>
        <p>
          Half Byte! is my maiden board game creation, driven by a desire to
          introduce an educational yet entertaining card game that simplifies
          Boolean algebra. Given manufacturing constraints and cost
          considerations, I opted for a design exclusively featuring cards. The
          initial prototype involved hand-drawn cards, evolving into a printed
          prototype created with my own resources.
        </p>

        <h4>Educational Approach</h4>
        <p>
          A core objective was to make Half Byte! an educational tool. To
          achieve this, I minimized the use of textual elements on individual
          cards to ensure accessibility across languages and age groups.
          Playtesting sessions, involving players aged 8 to 50, revealed that
          while younger participants may not fully grasp the intricacies of
          Boolean algebra, they could still grasp the overarching concepts.
        </p>
        <h4>Kickstarter Campaign</h4>
        <p>
          I launched a Kickstarter campaign for Half Byte!, setting a funding
          goal of $4,096. The campaign concluded with $754 raised, a commendable
          result considering the absence of paid advertising. Four backers
          supported the digital print-and-play version, while 46 backers backed
          the physical edition. The campaign provided invaluable experience,
          highlighting areas for future improvement.
        </p>
        <h5>Explore</h5>
        <Row>
          <Col>
            <div>
              <p>
                Half Byte! is inspired by Boolean Algebra, although not all
                logic concepts were integrated to maintain simplicity. The game
                comprises a deck of cards, each featuring a unique icon for
                language-agnostic gameplay. The majority of text on the cards is
                presented in a "computer language," eliminating the need for
                translation.
              </p>
            </div>
          </Col>
          <Col>
            <div class="projectMedia m-0">
              <img src={hbLogic} alt="Game Logic" />
            </div>
          </Col>
        </Row>

        <h5>Card Design</h5>
        <div class="projectMedia">
          <img src={hbCardDesign} alt="Card Design" />
        </div>
        <p>
          To make the game more accessible in different languages, all the cards
          has an unique icon. Most texts in the cards are “computer language”
          which were usually not translated.
        </p>
        <Row>
          <Col>
            <div class="projectMedia">
              <img src={hbCardFace} alt="Card Face" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
              <img src={hbCardBack} alt="Card Back" />
            </div>
          </Col>
        </Row>
        <p>
          The game features 16 "task cards," each representing a binary
          "number." The cards include English and hexadecimal references for
          clarity. The card backs are influenced by PCB board designs, enhancing
          the thematic appeal of the game.
        </p>
        <p>The card back is inspired by a PCB board.</p>

        <h5>Mockup Rendering</h5>
        <Row>
          <Col>
            <div class="projectMedia">
            <img src={hbRender1} alt="Box Design Rendering" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
            <img src={hbRender2} alt="Layout Render with Box" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
            <img src={hbRender3} alt="Layout Render" />
            </div>
          </Col>
        </Row>

        <h5> Lessons Learned</h5>
        <p>
          I discovered the significant value of comprehensive playtesting
          throughout this project. Engaging in iterative playtesting sessions
          with a diverse group of players provided essential insights into the
          dynamics of the game, the clarity of its rules, and the overall user
          experience. These observations were instrumental in refining game
          mechanics to ensure that gameplay was engaging and accessible to a
          wide range of players.
        </p>

        <p>
          The process of planning and overseeing a Kickstarter campaign for Half
          Byte! was a profound learning experience. It underscored the
          importance of meticulous campaign preparation, effective communication
          with backers, and the need for a compelling project presentation.
          Moreover, real-time monitoring of campaign progress was crucial for
          promptly addressing backer inquiries and making necessary adjustments.
          This experience deepened my understanding of crowdfunding dynamics and
          the intricacies of campaign management.
        </p>

        <p>
          The design process, encompassing the creation of cards, icons, and
          card layouts, played a significant role in this project. It
          highlighted the importance of maintaining a consistent and thematic
          design throughout the game. My use of design tools such as Adobe
          Dimension, Figma, Illustrator, and Blender was essential in crafting
          visually appealing and cohesive game elements. Additionally, the
          design approach, which minimized text and prioritized universal icons,
          was effective in ensuring that the game remained accessible and
          user-friendly to a global audience.
        </p>

        <p>
          In summary, the development of Half Byte! - It's a Nybble board game
          provided valuable lessons in effective playtesting, Kickstarter
          campaign management, and the design process. These insights have
          enhanced my board game design skills and project management
          capabilities, positioning me for future endeavors in the field of game
          development.
        </p>
        <div className="mb-3">
          <Button
            href="https://www.kickstarter.com/projects/axltgamestudio/half-byte-its-a-nybble-a-fast-pace-strategic-game"
            target="_blank"
            variant="outline"
            className="custom-btn"
          >
            1st Kickstarter Campaign (Physical Ver.)
          </Button>
        </div>

        <h5>Relaunch (Print & Play Ver.) </h5>
        <p>
          Two year later, after I have more spare time, I spend around 2 months
          finalizing a <b>print & play version</b> of the game. From the
          previous campaign, I've learned that I need a <b>promotion video</b>,
          better organized story, and more appealing images for the campaign. In
          the relaunch, I've created a video using <b>Blender</b>, and created a
          story with Figma.
        </p>
        <div className="video-container mb-3">
          <iframe
            src="https://www.kickstarter.com/projects/axltgamestudio/half-byte-its-a-nybble/widget/video.html"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Kickstarter video player"
          ></iframe>
        </div>
        <div>
          <Button
            href="http://kck.st/42tEibU"
            target="_blank"
            variant="outline"
            className="custom-btn"
          >
            2nd Kickstarter Campaign (Print & Play Ver.)
          </Button>
        </div>

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
