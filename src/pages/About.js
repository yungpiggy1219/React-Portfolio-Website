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
          Hi, my name is Yung-Chu Chuang. I’m a UX engineer with design,
          research, and software engineer skills. My background in Informatics
          with specialization in Human-Computer Interaction and Art allows me to
          understand problems from both a technology and creative perspective.
          My mission is to end user’s misery by bringing the best experience to
          them.
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
