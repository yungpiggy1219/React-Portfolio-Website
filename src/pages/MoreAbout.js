import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <Container>
      <Row>
        <h1 className="sectionTitle mb-3">/hobby 👾</h1>
      </Row>

      <Row>
        <p>
          I like 🎮 Video Games, 🎲 Tabletop Games, ⛰️ Hiking, 🏕️ Camping, 🏸 Badminton, 🎥 Film, 📷 Photography, 🎹 Piano, 🎸 Guitar, 
        </p>
      </Row>

      <Row>
        <h1 className="sectionTitle mb-3">/hobby</h1>
      </Row>
    </Container>
  );
}
