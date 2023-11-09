import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import insightLogo from "../images/insightLogo.PNG";
import logitechLogo from "../images/logitech.jpg";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import { orange } from '@mui/material/colors';

export default function About() {
  return (
    <Container>
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
          to provide users with seamless and delightful interactions.
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
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Jan 2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='secondary'>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <img
              src={insightLogo}
              loading="lazy"
              height="70vh"
            /><br />
            <Typography variant="h6" component="span">
              Insight by Nemera
            </Typography>
            <Typography>Human Factors Specialist</Typography>
            <Typography variant="body2">
              Conducted iterative in-depth user interviews and usability studies for over 7 projects, applying user feedback and insights to inform an iterative design process that ultimately increased task success rates by over 11%. Additionally, designed and executed over 10 human factors studies, including task analyses, heuristic evaluations, knowledge tasks, and simulated use, resulting in a 12% reduction in use errors. Ensured that medical hardware and software devices met stringent FDA regulations and usability standards, guaranteeing both user-friendliness and full compliance with safety and effectiveness guidelines.
            </Typography>
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
            <TimelineDot color='secondary'>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <img
              src={logitechLogo}
              loading="lazy"
              height="100vh"
            /><br />
            <Typography variant="h6" component="span">
              Logitech
            </Typography >
            <Typography>UX Researcher - Contractor</Typography>
            <Typography variant="body2">
              Managed and conducted over 10 experimental research projects that incorporated both qualitative and quantitative data analysis, ultimately leading to a 10% enhancement in product satisfaction. Led the end-to-end UX process, from concept to launch, encompassing ideation, thorough business requirement reviews, and close cooperation with software engineers. Developed high-level design concepts and functional requirements for applications, contributing to an overall 10% increase in user satisfaction. Collaborated seamlessly within a multidisciplinary team to define and refine user stories, prioritize features in alignment with business objectives, and ensure cohesiveness with the company's strategic vision.
            </Typography>
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
            <TimelineDot color='secondary'>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography>UX Researcher - Intern</Typography>
            <Typography variant="body2">
              Produced project-focused documentation, research test plans, and technical reports to maintain organized and data-driven project management. Created straightforward diagrams and simplified intricate data for effective stakeholder communication. Conducted research via interviews, usability testing with a focus on ergonomics, and competitive analysis. Analyzed customer feedback and performed market analysis for our flagship product, resulting in a 5% increase in customer satisfaction and substantial product improvements.
            </Typography>
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
          <p>
            User Research <br />
            Usability Study <br />
            Task Analysis <br />
            Human Perception <br />
            User Interviews <br />
            Surveys <br />
            Qualitative Research <br />
          </p>
        </Col>
        <Col>
          <b>UX Design</b>
          <p>
            Prototyping (Figma) <br />
            Wireframing <br />
            Information Architecture <br />
            User-Centered Design <br />
          </p>
        </Col>
        <Col>
          <b>Front-End Development</b>
          <p>
            HTML & CSS <br />
            JavaScript <br />
            React <br />
            Angular <br />
            Vue <br />
          </p>
        </Col>
        <Col>
          <b>Language</b>
          <p>
            English <br />
            Mandarin Chinese <br />
            Taiwanese <br />
          </p>
        </Col>
      </Row>
      {/*       <div className="hoverUnderline backDiv">
        <Nav.Link as={NavLink} to="/❤️">
          More about me :)
        </Nav.Link>
      </div> */}
    </Container>
  );
}
