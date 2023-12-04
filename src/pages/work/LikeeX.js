import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

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
import AdbIcon from '@mui/icons-material/Adb';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AndroidIcon from '@mui/icons-material/Android';

import likee from "../../images/likee-banner.png";
import likeex1 from "../../images/likeex1.png"
import likee1 from "../../images/likee1.webp";
import likee2 from "../../images/likee2.webp";
import likee3 from "../../images/likee3.webp";
import likee4 from "../../images/likee-mockup.png";
import likee5 from "../../images/likee-appannie.png";

import comp1 from "../../images/likeeComp1.png";
import comp2 from "../../images/likeeComp2.png";
import comp3 from "../../images/likeeComp3.png";
import comp4 from "../../images/likeeComp4.png";
import comp5 from "../../images/likeeComp5.png";

import avatar1 from "../../images/avatar1.png";
import avatar2 from "../../images/avatar2.png";

import Typography from '@mui/material/Typography';

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
              <Chip icon={<AdbIcon />} label="Android Developer" variant="outlined" />
              <Chip icon={<EmojiObjectsIcon />} label="CEO" variant="outlined" />
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
              <Chip icon={<ArchitectureIcon />} label="User Workflow" variant="outlined" />
            </Stack>
          </p>
        </Col>


        <Col>
          <p>
            <b>Tools</b>
            <Stack direction="row" mt={2} spacing={1}>
              <Chip icon={<Icon icon="devicon:figma" />} label="Figma" variant="outlined" />
              <Chip icon={<AndroidIcon />} label="Android Studio" variant="outlined" />
            </Stack>
          </p>
        </Col>
      </Row>
      <Row>


        <h5>Introduction</h5>
        <p>
          Likee XDownloader is an Android application designed to facilitate
          video downloads from the social media platform Likee. As the UI/UX
          Designer for this project, I collaborated closely with an Android
          Developer to create an intuitive and user-friendly experience for
          Likee users seeking to download their favorite videos.
        </p>

        <h5>Problem</h5>
        <p>
          Existing Likee Video Downloader apps on the Google Play Store suffered from various issues, including <b>poor device compatibility</b>, <b>frequent crashes</b>, <b>unattractive user interfaces</b>, <b>excessive advertisements</b>, and <b>convoluted user flows</b>. These problems created a demand for a more reliable and aesthetically pleasing app that would cater to the needs of both <b>Content Creators</b> and <b>Users with unreliable internet connections</b>.
        </p>

        <h5>Solution</h5>
        <img src={likeex1} alt="Likee XDownloader Mockup" />
      </Row>
      <h5 >Desgin Process</h5>
      <p>
        As part of the process, we critically reviewed the designs of existing
        Likee Video Downloader apps and other successful video downloading apps. This helped us
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
        Concurrent with user research, we embarked on an extensive research
        phase to achieve a holistic understanding of Likee's user base, their
        preferences, and the competitive landscape. This multifaceted research
        involved a blend of market analysis, competitive assessment, and
        in-depth user behavior studies.
      </p>
      <h4>Market Analysis</h4>
      <p>
        To see if there was a demand for a new Likee Video Downloader app, we
        conducted a market analysis. This involved researching the number of
        downloads and reviews of existing apps. We also analyzed the
        geographical distribution of users and the most popular devices used
        to access Likee. This research revealed a significant demand for a
        new, more reliable app.
      </p>
      <div class="projectMedia">
        <img src={likee5} alt="likee-mockup" />
      </div>
      <h4>User Research</h4>
      <p>
        The design process commenced with a thorough phase of user research.
        We needed to understand the unique requirements of Likee users who
        sought to download videos. This involved analyzing the preferences of
        our target audience, such as video types, usage patterns, and the
        platforms they preferred for accessing Likee content. This research
        laid the foundation for the entire design journey.
      </p>

      <h4>User Archetypes</h4>
      <p>
        We identified several key user archetypes, each with unique needs and
        preferences. This helped us tailor the design to the specific
        requirements of our target audience. The archetypes we identified
        included:
      </p>

      <Row>
        <Col>
          <div class="personaMedia">
            <img src={avatar2} alt="Content Creator" />
          </div>
          <Typography component="div" variant="h5">
            Content Creator
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            These users seek inspiration for their content and are interested on video sharing platform such as Likee. They are interested in:
            <ul>
              <li>Downloading videos from Likee to use in their own content</li>
              <li>Tracking the popularity of their videos</li>
              <li>Comparing their video performance with that of other creators</li>
            </ul>
          </Typography>
        </Col>

        <Col>
          <div class="personaMedia">
            <img src={avatar1} alt="User with unstable internet" />
          </div>
          <Typography component="div" variant="h5">
            User with unstable internet
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            These users have unstable internet connections and are interested in:
            <ul>
              <li>Downloading videos from Likee to watch offline</li>
              <li>Downloading videos from Likee to share with friends</li>
              <li>Downloading videos from Likee to watch on other devices</li>
            </ul>
          </Typography>
        </Col>
      </Row>
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
      <Row className="align-items-center">

        <Col>
          <div class="projectMedia">
            <img src={comp1} alt="Likee Downloader Compeitor" />
          </div>
        </Col>
        <Col>
          <div class="projectMedia">
            <img src={comp2} alt="Likee Downloader Compeitor" />
          </div>
        </Col>
        <Col>
          <div class="projectMedia">
            <img src={comp3} alt="Likee Downloader Compeitor" />
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
      </Row>

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
    </Container >
  );
}
