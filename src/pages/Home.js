import { Container } from 'react-bootstrap';

import Typewriter from 'typewriter-effect';

import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import monsterdex from "../images/monsterdex-banner.png";
import likeex from "../images/likee-banner.png";
import halfbyte from "../images/halfbyte-banner.png";

export default function Home() {
    return (
        <Container>
            <Row className="heroTitle">
                <h1>Hello, <br />
                    my name is Yung-Chu, <br />
                    <div className='typing'> <div className='fixWord'>and I am a</div>
                        <Typewriter
                            options={{
                                strings: ['designer.', ' gamer.', ' researcher.', ' developer.'],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 30,
                                pauseFor: 250,
                                skipAddStyles: false,
                            }}
                        />
                    </div>
                </h1>
            </Row>
            <h4>my recent work</h4>
            <Row className="galleryP recentWork">
                <div class="media">
                    <div class="layer">
                        <Nav.Link as={NavLink} to="/work/monsterdex">
                            + UX/UI Design
                        </Nav.Link>
                    </div>
                    <img src={monsterdex} alt="MonsterDex iOS Development" />
                </div>
            </Row>
        </Container>
    );
};

