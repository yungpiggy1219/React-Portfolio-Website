import { Container, Row, Col } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Icon } from "@iconify/react";

import monsterdex from "../../images/monsterdex-banner.png";
import monsterdex1 from "../../images/monsterdex1.png";
import monsterdex2 from "../../images/monsterdex2.png";
import monsterdex3 from "../../images/monsterdex3.png";
import monsterdex4 from "../../images/monsterdex4.png";

export default function MonsterDex() {
  return (
    <Container>
      <Row>
        <div className="hoverUnderline backDiv">
          <Nav.Link className="p" as={NavLink} to="/work">
            <Icon style={{ fontSize: "36px" }} icon="bx:arrow-back" /> Back
          </Nav.Link>
        </div>
        <img src={monsterdex} alt="MonsterDex iOS App Development" />
        <h1 className="mb-3">/MONSTERDEX iOS App</h1>
        <h6 className="mb-3">UI/UX Design</h6>
        <p>MonsterDex is a reference iOS app for Pokemon.</p>
        <p>
          <b>Role</b> UI/UX Designer{" "}
        </p>
        <p>
          <b>Team Member </b> 1 iOS Developer{" "}
        </p>
        <p>
          <b>Duration</b> March 2023 – Ongoing{" "}
        </p>
        <p>
          <b>Methods</b> Competitor Analysis | Market Research{" "}
        </p>
        <p>
          <b>Tools</b> Figma
        </p>
        <h5>Discover</h5>
        <p>
          This app is for education purpose only. My friend is building his
          portfolio in mobile development and wanted something nice and
          presentable. He decided to make an Pokédex app. In Apple App Store,
          the current available app are either <b>outdated</b>, <b>buggy</b> or{" "}
          <b>lack of aesthetics</b>. To develop a better product, we studied the
          competitors and learn what users want out of the app.
        </p>
        <p>From the competitors, we can categorize the users into 2 types:</p>
        <div>
          Casual Player
          <ul>
            <li>
              Players who wish only to look up basics information such as:
              <ul>
                <li>View Pokémon by types or generation</li>
                <li>Where to find a certain Pokémon</li>
                <li>How and when a Pokémon evolves</li>
              </ul>
            </li>
          </ul>
          Hardcord Player
          <ul>
            <li>
              Players who wish to become the best Pokémon trainer with the
              information such as:
              <ul>
                <li>
                  Progress of PokéDex collection for the game they are playing
                </li>
                <li>Team builder that helps build the best team</li>
                <li>Hatching information</li>
              </ul>
            </li>
          </ul>
        </div>
        <h5>Design</h5>
        <h4>Mockup</h4>
        <img src={monsterdex1} alt="MonsterDex Mockup" />

        <h5>Lessons Learned​</h5>
        <p>
          Throughout the process of creating an <b>iOS app</b> with my team of
          two, where I took charge of the <b>UX/UI design</b> using <b>Figma</b>
          , I have learned valuable lessons that have shaped my understanding
          and approach to app development. One of the most significant lessons I
          have learned is the importance of collaboration and effective
          communication within a small team. Working closely with my partner
          allowed us to leverage our individual strengths and combine our
          creative visions to create a cohesive and <b>user-friendly app</b>. I
          realized that open and transparent <b>communication</b> is key to
          successfully aligning our ideas and ensuring that the app’s design met
          the desired objectives. Additionally, this experience taught me the
          importance of user-centered design principles. By conducting{" "}
          <b>user research</b>, creating <b>wireframes</b>, and{" "}
          <b>prototyping</b>, I was able to iterate and refine the design based
          on user feedback, ultimately leading to an improved user experience.
          Lastly, I learned the value of <b>attention to detail</b> and
          <b>consistency in design</b>. Through meticulous refinement and
          adhering to design guidelines, I ensured that the app’s visual
          elements and interactions were consistent and intuitive, contributing
          to a seamless and delightful user experience. Overall, this project
          has enriched my understanding of <b>teamwork</b>,{" "}
          <b>user-centered design</b>, and the significance of consistent
          attention to detail in app development, leaving me better equipped for
          future design endeavors.
        </p>
        <h5>Apple App Store</h5>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/idZxbDAjyzI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
          <Col lg={2}>
            <div class="projectMedia">
              <img src={monsterdex2} alt="MonsterDex List" />
            </div>
          </Col>
          <Col lg={2}>
            <div class="projectMedia">
              <img src={monsterdex3} alt="MonsterDex Detail" />
            </div>
          </Col>
          <Col lg={2}>
            <div class="projectMedia">
              <img src={monsterdex4} alt="MonsterDex Spec" />
            </div>
          </Col>
        </Row>
        <p>
          Master every Pokemon with MonsterDex – the ultimate iOS app! Get info
          on every Pokemon, their stats, types, abilities, moves, and
          evolutions. Download now!
        </p>
        <p>
          Welcome to MonsterDex, the ultimate Pokédex app for Pokémon trainers!
          With detailed information on over 1200 Pokémons, 950+ items, 900+
          moves, and 350+ abilities, you’ll have everything you need to catch
          ’em all.
        </p>
        <p>Key Features:</p>
        <p>
          – Comprehensive data for all 9 generations of Pokémon, from Red and
          Blue to Scarlet and Violet.
        </p>
        <p>
          – Easily search and sort Pokémon by name, type, ID, and generation.
        </p>
        <p>– Customize your app icon with your favorite Pokémon type.</p>
        <p>More exciting features coming soon! Stay tuned for updates.</p>
        <p>
          Please note that MonsterDex is an unofficial app and is not
          affiliated, endorsed, or supported by Nintendo, GAME FREAK, or The
          Pokémon Company. Some images used in the app are copyrighted and
          belong to these companies, and are used in accordance with the laws of
          Fair Use.
        </p>
        <p>
          Take your Pokémon training to the next level with the best Pokédex app
          for iPhone!
        </p>
        <p>
          Download MonsterDex now to access comprehensive information on all
          your favorite Pokémon.
        </p>
        <p>
          Looking for detailed stats, moves, and abilities for your Pokémon? Use
          our intuitive search and sort features to quickly find what you’re
          looking for. Plus, customize your app icon with your favorite Pokémon
          for a personal touch.
        </p>
        <p>
          We value your feedback and suggestions. Please send your comments via
          in-app feedback, reviews, or email us at axltgamestudio@gmail.com
        </p>
        <p>Download MonsterDex now and become the ultimate Pokémon trainer!</p>
        <div>
          <Button
            href="https://apps.apple.com/us/app/monsterdex/id6447112284?platform=iphone"
            target="_blank"
            variant="outline"
            className="custom-btn"
          >
            MonsterDex on the App Store
          </Button>
        </div>
        <div className="myFooter">
          <div className="hoverUnderline backDiv">
            <Nav.Link as={NavLink} to="/work">
              <Icon style={{ fontSize: "36px" }} icon="bx:arrow-back" /> Back
            </Nav.Link>
          </div>
          <h5>© 2023 yung chu chuang</h5>
        </div>
      </Row>
    </Container>
  );
}
