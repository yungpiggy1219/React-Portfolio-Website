import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Icon } from "@iconify/react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import ArchitectureIcon from '@mui/icons-material/Architecture';
import AppleIcon from '@mui/icons-material/Apple';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExtensionIcon from '@mui/icons-material/Extension';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Groups3Icon from '@mui/icons-material/Groups3';
import SchemaIcon from '@mui/icons-material/Schema';

import monsterdex from "../../images/monsterdex-banner.png";
import monsterdex1 from "../../images/monsterdex1.png";
import monsterdex2 from "../../images/monsterdex2.png";
import monsterdex3 from "../../images/monsterdex3.png";
import monsterdex4 from "../../images/monsterdex4.png";
import monsterIA from "../../images/monsterIA.png";
import monsterWF from "../../images/monsterWF.png";

import comp1 from "../../images/comp1.PNG";
import comp2 from "../../images/comp2.PNG";
import comp3 from "../../images/comp3.PNG";
import comp4 from "../../images/comp4.PNG";
import comp5 from "../../images/comp5.PNG";
import comp6 from "../../images/comp6.PNG";
import compReview from "../../images/compReview.png";

import avatar1 from "../../images/avatar1.png";
import avatar2 from "../../images/avatar2.png";

import Typography from '@mui/material/Typography';

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
        <h1 className="mb-3 mt-3">/MONSTERDEX iOS App</h1>

      </Row>
      <Row>
        {/* <p>
          <b>Duration</b>
          <Stack direction="row" mt={2} spacing={1} flexWrap="wrap" useFlexGap>
            <Chip icon={<AccessTimeIcon />} label="March 2023 – Ongoing" variant="outlined" />
          </Stack>
        </p> */}
        <Col>
          <p>
            <b>My Role</b>
            <Stack direction="row" mt={2} spacing={1} flexWrap="wrap" useFlexGap>
              <Chip icon={<ExtensionIcon />} label="UX/UI Designer" variant="outlined" />
            </Stack>
          </p>
          <p>
            <b>Team Member </b>
            <Stack direction="row" mt={2} spacing={1} flexWrap="wrap" useFlexGap>
              <Chip icon={<AppleIcon />} label="iOS Developer" variant="outlined" />
            </Stack>
          </p>
        </Col>

        <Col>
          <p>
            <b>Methods</b>
            <Stack direction="row" mt={2} spacing={1} flexWrap="wrap" useFlexGap>
              <Chip icon={<BarChartIcon />} label="Competitor Analysis" variant="outlined" />
              <Chip icon={<SmartToyIcon />} label="Prototyping" variant="outlined" />
              <Chip icon={<WidgetsIcon />} label="Wireframing" variant="outlined" />
              <Chip icon={<Groups3Icon />} label="User Archetypes" variant="outlined" />
              <Chip icon={<ArchitectureIcon />} label="Information Architecture" variant="outlined" />
              <Chip icon={<SchemaIcon />} label="Task Analysis" variant="outlined" />
            </Stack>
          </p>
        </Col>


        <Col>
          <p>
            <b>Tools</b>
            <Stack direction="row" mt={2} spacing={1}>
              <Chip icon={<Icon icon="devicon:figma" />} label="Figma" variant="outlined" />
            </Stack>
          </p>
        </Col>

        <h5>Introduction</h5>
        <p>
          The MonsterDex iOS app project aimed to fill a significant gap in the
          world of Pokémon-related applications available on the Apple App
          Store. As a UI/UX Designer, my role was to create a user-friendly and
          visually appealing Pokédex app. Working closely with an iOS developer,
          we set out to build an application that not only addressed the
          shortcomings of existing Pokémon apps.
        </p>

        <h5>Problem</h5>
        <p>
          Existing Pokédex apps on the App Store suffered from various issues, including <b>outdated information</b>, <b>frequent crashes</b>, <b>unattractive user interfaces</b>, <b>poor information architecture</b>, and <b>convoluted user flows</b>. These problems created a demand for a more reliable and aesthetically pleasing Pokédex app that would cater to the needs of both <b>Casual Players</b> and <b>Hardcore Players</b>.
        </p>
        <p>
          The poor information architecture in these apps often led to a frustrating user experience. Users found it difficult to locate the specific information they needed, such as detailed Pokémon statistics, evolutions, and move sets. The lack of a coherent structure within the apps meant that players had to spend an inordinate amount of time navigating through cluttered menus and confusing categories. This not only hampered their gameplay but also made the overall experience less enjoyable.
        </p>
        <p>
          Moreover, the convoluted user flows in these existing Pokédex apps exacerbated the problem. Simple tasks like searching for a Pokémon, viewing its abilities, or accessing its location in the game world became time-consuming and counterintuitive. Players often found themselves lost in a maze of menus, and the lack of a logical progression in their interactions with the app made it challenging to achieve their objectives efficiently.
        </p>

        <h5>Solution</h5>
        <img src={monsterdex1} alt="MonsterDex Mockup" />
        <br />
        <h5 >Desgin Process</h5>
        <p>
          As part of the process, we critically reviewed the designs of existing
          Pokémon-related apps and other successful mobile apps. This helped us
          identify design strengths and weaknesses and served as a foundation
          for developing our unique design.
        </p>
        <p>
          We used these insights to create initial wireframes and prototypes.
          Through an iterative process, we continuously improved the design
          based on user feedback and design reviews. This allowed us to refine
          the interface and ensure it aligned with user preferences.
        </p>

        <h5>Market Research</h5>
        <p>
          Market research revealed a growing demand for team-building and
          strategy tools among Pokémon players. The trend indicated an
          opportunity to create a comprehensive app that catered to both the
          casual and hardcore segments of the Pokémon community.
        </p>

        <h4>Competitor Analysis</h4>
        <p>We evaluated the user experiences of competitors' products to identify strengths, weaknesses, and opportunities.
          We analyzed competitor features, design choices, and overall strategies.
        </p>
        <p>
          Most common issues we found include <b>outdated information</b>, <b>frequent crashes</b>, <b>unattractive user interfaces</b>, <b>poor information architecture</b>, and <b>convoluted user flows</b>. These problems created a demand for a more reliable and aesthetically pleasing Pokédex app
        </p>
        <Row>
          <img src={compReview} alt="Pokedex Compeitor Reviews" />
        </Row>
        <Row>
          <p>
            The poor information architecture in these apps often led to a frustrating user experience. Users found it difficult to locate the specific information they needed, such as detailed Pokémon statistics, evolutions, and move sets. The lack of a coherent structure within the apps meant that players had to spend an inordinate amount of time navigating through cluttered menus and confusing categories. This not only hampered their gameplay but also made the overall experience less enjoyable.
          </p>
          <p>
            Moreover, the convoluted user flows in these existing Pokédex apps exacerbated the problem. Simple tasks like searching for a Pokémon, viewing its abilities, or accessing its location in the game world became time-consuming and counterintuitive. Players often found themselves lost in a maze of menus, and the lack of a logical progression in their interactions with the app made it challenging to achieve their objectives efficiently.
          </p>
        </Row>


        <Row className="align-items-center">

          <Col>
            <div class="projectMedia">
              <img src={comp1} alt="Pokedex Compeitor" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
              <img src={comp2} alt="Pokedex Compeitor" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
              <img src={comp3} alt="Pokedex Compeitor" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
              <img src={comp4} alt="Pokedex Compeitor" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
              <img src={comp5} alt="Pokedex Compeitor" />
            </div>
          </Col>
          <Col>
            <div class="projectMedia">
              <img src={comp6} alt="Pokedex Compeitor" />
            </div>
          </Col>
        </Row>

        <h4>User Archetypes</h4>
        <p>
          We identified several key players in the
          Pokémon app space. For example, "PokéGuide" offered comprehensive
          information on Pokémon, types, and evolutions but suffered from an
          outdated user interface and frequent crashes. This analysis guided our
          design decisions by highlighting the need for a reliable and visually
          appealing app. Based on our competitor research, we identified two
          distinct user categories:
        </p>

        <Row>
          <Col>
            <div class="personaMedia">
              <img src={avatar1} alt="Casual Player Avatar" />
            </div>
            <Typography component="div" variant="h5">
              Casual Player
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              These users seek basic information, including:
              <ul>
                <li>View Pokémon by types or generation</li>
                <li>Finding the location of specific Pokémon</li>
                <li>Understanding how and when a Pokémon evolves</li>
              </ul>
            </Typography>
          </Col>

          <Col>
            <div class="personaMedia">
              <img src={avatar2} alt="Hardcore Player Avatar" />
            </div>
            <Typography component="div" variant="h5">
              Hardcore Player
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              These dedicated players aspire to excel in their Pokémon journey
              by accessing information such as:
              <ul>
                <li>Tracking their PokéDex collection progress in their current game</li>
                <li>Utilizing a team builder tool to assemble the most effective team</li>
                <li>Gaining insights into hatching mechanics</li>
              </ul>
            </Typography>
          </Col>
        </Row>

        <h4>Information Architecture</h4>
        <img src={monsterIA} alt="MonsterDex Information Architecture" />

        <h4>Wireframing</h4>
        <img src={monsterWF} alt="MonsterDex Wireframing" />




        <h5>Challenges</h5>
        <p>
          A significant challenge during the project was aligning our design
          vision with the technical feasibility. Open and honest communication
          between the UI/UX Designer (myself) and the iOS Developer was
          essential in finding common ground. We resolved this by prioritizing
          features based on user needs and technical constraints.
        </p>
        <h5>Lessons Learned​</h5>
        <p>
          During the collaborative development of our <b>iOS app</b>, where I
          assumed responsibility for <b>UX/UI design</b> utilizing <b>Figma</b>,
          I gained invaluable insights that have significantly influenced my
          approach to app development.
        </p>
        <p>
          One of the most significant lessons I have learned is the importance
          of collaboration and effective communication within a small team.
          Working closely with my partner allowed us to leverage our individual
          strengths and combine our creative visions to create a cohesive and{" "}
          <b>user-friendly app</b>. I realized that open and transparent{" "}
          <b>communication</b> is key to successfully aligning our ideas and
          ensuring that the app’s design met the desired objectives.
          Additionally, this experience taught me the importance of
          user-centered design principles. By conducting <b>user research</b>,
          creating <b>wireframes</b>, and <b>prototyping</b>, I was able to
          iterate and refine the design based on user feedback, ultimately
          leading to an improved user experience.{" "}
        </p>
        <p>
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

        <h5>Future Directions</h5>
        <p>
          In our ongoing efforts to ensure the sustainability and continuous
          improvement of the app, we are planning a strategic implementation of
          non-intrusive advertisements. Our approach to ad integration will
          prioritize a seamless user experience to ensure it does not disrupt or
          inconvenience our users. By striking a careful balance between
          functionality and advertising, we aim to provide a financially viable
          platform while preserving the user-friendly nature of the app.
        </p>
        <p>
          Furthermore, we remain deeply committed to being responsive to user
          feedback and feature requests. The MonsterDex community's voice is
          integral to our development process. We are dedicated to implementing
          additional functionalities that align with their needs and
          preferences. Active listening and collaboration with our users will
          guide our ongoing efforts to enhance the app and tailor it to their
          evolving expectations.
        </p>
        <p>
          Building upon our initial plan, we will also be dedicating resources
          to further enhance the team-building feature. This expansion may
          encompass more in-depth stat comparisons, personalized move set
          recommendations, and advanced synergy analysis for Pokémon teams. Our
          aim is to provide users with a robust toolkit for crafting the ideal
          Pokémon squads, as we continue to refine and expand the app based on
          user-driven insights and the evolving landscape of Pokémon gaming.
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
        <div className="hoverUnderline backDiv">
          <Nav.Link as={NavLink} to="/work">
            <Icon style={{ fontSize: "36px" }} icon="bx:left-arrow-alt" /> Back
          </Nav.Link>
        </div>
        <Footer />
      </Row>
    </Container >
  );
}
