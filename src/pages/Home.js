import { Container } from 'react-bootstrap';

import Typewriter from 'typewriter-effect';

import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
                                strings: ['produdct designer.', ' ux researcher.', ' ui developer.', ' gamer.'],
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
            <h4>my works</h4>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={monsterdex}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='muih5'>
                        UX/UI Design
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        MonsterDex is a Pokédex app for Pokémon trainers! With detailed information on over 1200 Pokémons, 950+ items, 900+ moves, and 350+ abilities.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href='#/work/monsterdex'>Learn More</Button>
                    <Button size="small" href='#/work/monsterdex'>App Store</Button>
                </CardActions>
            </Card>
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

