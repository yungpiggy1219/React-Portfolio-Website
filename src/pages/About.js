import { Container, Row, Col } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <Container>
      <Row>
        <h1 className="sectionTitle mb-3">/about</h1>
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

      <Row className="hoverUnderline">
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
      <Row className="mt-5">
        <h1 className="sectionTitle mb-3">/skill</h1>
      </Row>

      <Row>
        <Col>
          <b>Research</b>
          <p>
            User Research <br />
            Usability Testing <br />
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
