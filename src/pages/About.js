import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import aboutBanner from "../images/aboutBanner.jpg";
import aboutBanner2 from "../images/aboutBanner2.JPG";

import insightLogo from "../images/insightLogo.PNG";
import logitechLogo from "../images/logitech.png";
import appcelaLogo from "../images/appcela.svg";
import isuLogo from "../images/isuLogo.svg"
import uciLogo from "../images/uciLogo.jpg";

export default function About() {
  return (

    <Container>
      <Row className="aboutBanner" >
        <img src={aboutBanner} alt=""/>
      </Row>

      <Row>
        <h1 className="sectionTitle mb-3 sectionPadding">/about</h1>
      </Row>

      <Row>
        <p>
          Hello, I'm Yung-Chu Chuang, a versatile UX engineer with a
          multi-faceted skill set that encompasses design, research, and
          software engineering. My academic background in Informatics, with a
          specialization in Human-Computer Interaction, coupled with my creative
          flair, allows me to approach challenges from both a technological and
          artistic perspective. My unwavering mission is to revolutionize user
          experiences by delivering the utmost satisfaction and eliminating user
          frustrations. Through the fusion of technology and creativity, I aim
          to provide users with seamless and delightful interactions. Currently 
          pursuing a master’s degree in HCI, expected to graduate in Summer 2025.
        </p>
      </Row>
      <Row>
        <h1 className="sectionTitle mb-3">/experiences</h1>
      </Row>

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColor">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <img
              src={insightLogo}
              loading="lazy"
              height="70vh"
              alt="Insight Logo"
            /><br />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Jan 2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColorOutline" variant="outlined">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography className="muih6" component="span">
              Human Factors Specialist
            </Typography>
            <br />
            <Stack mt={1} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip size="small" label="Usability Study" variant="outlined" />
              <Chip size="small" label="Qualitative Research" variant="outlined" />
              <Chip size="small" label="Recruiting" variant="outlined" />
              <Chip size="small" label="Task Analysis" variant="outlined" />
            </Stack>

            {/* <Typography className="muiBody">
              Conducted iterative in-depth user interviews and usability studies for over 7 projects, applying user feedback and insights to inform an iterative design process that ultimately increased task success rates by over 11%. Additionally, designed and executed over 10 human factors studies, including task analyses, heuristic evaluations, knowledge tasks, and simulated use, resulting in a 12% reduction in use errors. Ensured that medical hardware and software devices met stringent FDA regulations and usability standards, guaranteeing both user-friendliness and full compliance with safety and effectiveness guidelines.
            </Typography> */}

          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColor" >
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <img
              src={logitechLogo}
              loading="lazy"
              height="50vh"
              alt="Logitech Logo"
            /><br />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Jun 2021 - Dec 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColorOutline" variant="outlined">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography className="muih6" component="span">
              UX Researcher - Contractor
            </Typography >
            <Stack mt={1} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip size="small" label="Experimental Research" variant="outlined" />
              <Chip size="small" label="Qualitative Analysis" variant="outlined" />
              <Chip size="small" label="UX/UI Design" variant="outlined" />
              <Chip size="small" label="Sustainability" variant="outlined" />
            </Stack>
            {/* <Typography className="muiBody">
              Managed and conducted over 10 experimental research projects that incorporated both qualitative and quantitative data analysis, ultimately leading to a 10% enhancement in product satisfaction. Led the end-to-end UX process, from concept to launch, encompassing ideation, thorough business requirement reviews, and close cooperation with software engineers. Developed high-level design concepts and functional requirements for applications, contributing to an overall 10% increase in user satisfaction. Collaborated seamlessly within a multidisciplinary team to define and refine user stories, prioritize features in alignment with business objectives, and ensure cohesiveness with the company's strategic vision.
            </Typography> */}
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Mar 2021 - Jun 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColorOutline" variant="outlined">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="span" className="muih6">
              UX Researcher - Intern
            </Typography >
            <Stack mt={1} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip size="small" label="Market Research" variant="outlined" />
              <Chip size="small" label="Data Analysis" variant="outlined" />
              <Chip size="small" label="Competitive Analysis" variant="outlined" />
            </Stack>
            {/* <Typography className="muiBody">
              Produced project-focused documentation, research test plans, and technical reports to maintain organized and data-driven project management. Created straightforward diagrams and simplified intricate data for effective stakeholder communication. Conducted research via interviews, usability testing with a focus on ergonomics, and competitive analysis. Analyzed customer feedback and performed market analysis for our flagship product, resulting in a 5% increase in customer satisfaction and substantial product improvements.
            </Typography> */}
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColor">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <img
              src={appcelaLogo}
              loading="lazy"
              height="50vh"
              alt="Appcela Logo"
            /><br />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Dec 2020 - Mar 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColorOutline" variant="outlined">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography className="muih6" component="span">
              UX Engineer
            </Typography>
            <Stack mt={1} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip size="small" label="Vue.js" variant="outlined" />
              <Chip size="small" label="UX/UI Design" variant="outlined" />
              <Chip size="small" label="Front-End Development" variant="outlined" />
            </Stack>
            {/* <Typography className="muiBody">
              Conducted iterative in-depth user interviews and usability studies for over 7 projects, applying user feedback and insights to inform an iterative design process that ultimately increased task success rates by over 11%. Additionally, designed and executed over 10 human factors studies, including task analyses, heuristic evaluations, knowledge tasks, and simulated use, resulting in a 12% reduction in use errors. Ensured that medical hardware and software devices met stringent FDA regulations and usability standards, guaranteeing both user-friendliness and full compliance with safety and effectiveness guidelines.
            </Typography> */}

          </TimelineContent>
        </TimelineItem>

      </Timeline>


      {/*  <Row className="hoverUnderline">
        <a>
          <Icon icon="akar-icons:file" />
          <Button
            href="https://docs.google.com/document/d/1zS5TzMBmI4uDuIvWG0UaaOOnet9qHfEln2pmdUpNA74/edit?usp=sharing"
            target="_blank"
            variant="link"
            className="custom-btn"
          >
            resume
          </Button>
        </a>
      </Row>
       */}

      <Row className="mt-5">
        <h1 className="sectionTitle mb-3">/skill</h1>
      </Row>

      <Row>
        <Col>
          <b>Research</b>
          <Stack mt={2} direction="row" spacing={1} flexWrap="wrap" useFlexGap >
            <Chip size="small" label="User Research" variant="outlined" />
            <Chip size="small" label="Usability Testing" variant="outlined" />
            <Chip size="small" label="Task Analysis" variant="outlined" />
            <Chip size="small" label="Cognitive Psychology" variant="outlined" />
            <Chip size="small" label="User Interviews" variant="outlined" />
            <Chip size="small" label="Surveys" variant="outlined" />
            <Chip size="small" label="Qualitative Research" variant="outlined" />
            <Chip size="small" label="Data Analysis" variant="outlined" />
            <Chip size="small" label="Journey Mapping" variant="outlined" />
            <Chip size="small" label="A/B Testing" variant="outlined" />
          </Stack>
        </Col>
        <Col>
          <b>UX Design</b>
          <Stack mt={2} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip size="small" label="Figma" variant="outlined" />
            <Chip size="small" label="Wireframing" variant="outlined" />
            <Chip size="small" label="Prototyping" variant="outlined" />
            <Chip size="small" label="Interaction Design" variant="outlined" />
            <Chip size="small" label="User Flows" variant="outlined" />
            <Chip size="small" label="Design Thinking" variant="outlined" />
            <Chip size="small" label="Mobile Design" variant="outlined" />
            <Chip size="small" label="Responsive Design" variant="outlined" />
            <Chip size="small" label="Informationi Architechture" variant="outlined" />
          </Stack>
        </Col>
        <Col>
          <b>Front-End</b>
          <Stack mt={2} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip size="small" label="HTML" variant="outlined" />
            <Chip size="small" label="CSS" variant="outlined" />
            <Chip size="small" label="JavaScript" variant="outlined" />
            <Chip size="small" label="Vue.js" variant="outlined" />
            <Chip size="small" label="React" variant="outlined" />
            <Chip size="small" label="React Native" variant="outlined" />
            <Chip size="small" label="Angular" variant="outlined" />
            <Chip size="small" label="Git" variant="outlined" />
          </Stack>
        </Col>
        <Col>
          <b>Language</b>
          <Stack mt={2} direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip size="small" label="English" variant="outlined" />
            <Chip size="small" label="Chinese" variant="outlined" />
            <Chip size="small" label="Taiwanese" variant="outlined" />
          </Stack>
        </Col>
      </Row>

      <Row>
        <h1 className="sectionTitle mt-3 mb-3">/education</h1>
      </Row>

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Aug 2023 - Aug 2025 (Expected)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColor">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <img
              src={isuLogo}
              loading="lazy"
              height="40vh"
              alt="Iowa State University Logo"
            /><br />
            <Typography variant="h6" component="span">
              Master of Human Computer Interaction
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Sep 2015 - Mar 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="dotColor">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <img
              src={uciLogo}
              loading="lazy"
              height="40vh"
              alt="UC Irvine Logo"
            /><br />
            <Typography variant="h6" component="span">
              Bachelor of Science (B.S.), Informatics
            </Typography>
            <Typography variant="body2">Specialization in Human Computer Interaction</Typography>
            <Typography variant="h6" component="span">
              Bachelor of Arts (B.A.), Art
            </Typography>
            <Typography variant="body2">Emphasis in Digital Filmmaking</Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>

      <Row className="aboutBanner sectionPadding" >
        <img src={aboutBanner2} alt=""/>
      </Row>

      {/*       <div className="hoverUnderline backDiv">
        <Nav.Link as={NavLink} to="/❤️">
          More about me :)
        </Nav.Link>
      </div> */}
    </Container>
  );
}
