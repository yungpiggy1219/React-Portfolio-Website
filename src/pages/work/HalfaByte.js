import { Container, Row, Col} from "react-bootstrap";

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
        <p>
          This is a board game I’m creating on my own. This game is the first
          game I’ve created and hosted playtesting sessions. Most of my other
          ideas involve many tokens or meeples, which would have budget issues
          when manufacturing. I originally designed this game with some
          constraint, where it will only include cards. The first prototype is
          made with hand-drawn cards. Later I made a printed prototype with my
          own printers.
        </p>
        <p>
          I wanted this game to be educational where players can learn the
          basics of boolean algebra. To make this game more accessible around
          the world, I minimized the use of texts especially on individual
          cards. I’ve tested the game with players from the age of 8 years old
          to 50 years old. An 8 year-old might not necessarily fully understand
          how and why boolean algebra works, they can still understand the big
          picture.
        </p>
        <p>
          I’ve launched this project on Kickstarter once. My goal was set to
          $4096 and I raised $754 by the end of the campaign. It wasn’t too bad
          because I did not put up ads. I had 4 backers who backed the digital
          print-and-play version and 46 backers who backed the physical version.
          This was a great experience and there is room for improvement.
        </p>
        <h5>Explore</h5>
        <Row>
          <Col>
            <div>
              <p>
                This game is inspired by and based on Boolean Algebra. Not all
                logic are included to keep the game simple.
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
          There are 16 “task cards.” Each task card is a “number” in binary. In
          the background of the card, there are also English and hexadecimal.
        </p>
        <p>The card back is inspired by a PCB board.</p>

        <h5>Mockup Rendering</h5>
        <Row className="galleryP">
          <div class="wrapper">
            <div class="projectMedia">
              <img src={hbRender1} alt="Box Design Rendering" />
            </div>
            <div class="projectMedia">
              <img src={hbRender2} alt="Layout Render with Box" />
            </div>
            <div class="projectMedia">
              <img src={hbRender3} alt="Layout Render" />
            </div>
          </div>
        </Row>

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
