//import logo from './logo.svg';
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import ReactGA from "react-ga4";
import Hotjar from "@hotjar/browser";

import { Row, Col, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";

import IconButton from "@mui/material/IconButton"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import HalfaByte from "./pages/work/HalfaByte";
import UpCancer from "./pages/work/UpCancer";
import LikeeX from "./pages/work/LikeeX";
import MonsterDex from "./pages/work/MonsterDex";
import { colors } from "@mui/material";
//import ProjectPlanet from "./pages/work/ProjectPlanet";
//import SharkSimulator from "./pages/work/SharkSimulator";
//import MoreAbout from "./pages/MoreAbout";

import scrollToTop from "./scrollToTop";


function App() {
  // Google Analytics
  const TRACKING_ID = "G-WN12DDJH7F";
  ReactGA.initialize(TRACKING_ID);

  // Hotjar
  const siteId = 3708511;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  // Mobile Condition
  const isMobile = window.innerWidth <= 768;

  // Generate Page

  return (

    <div>
      {isMobile ? (
        <div className="d-flex flex-column min-vh-100">
          {/* Mobile layout */}
          <Router>
            <Navbar.Brand as={NavLink} to="/" className="mobileTitle">  YUNGCHU CHUANG  </Navbar.Brand>
            <Navbar>
              <Nav>
                <Nav.Link className="hoverUnderline" as={NavLink} to="/" end> home <span className="indexText">0</span>  </Nav.Link>
                <Nav.Link className="hoverUnderline" as={NavLink} to="/about"> about <span className="indexText">1</span>  </Nav.Link>
                <Nav.Link className="hoverUnderline" as={NavLink} to="/work"> work <span className="indexText">2</span> </Nav.Link>
                <Nav.Link className="hoverUnderline" as={NavLink} to="/contact"> contact <span className="indexText">3</span> </Nav.Link>
              </Nav>
            </Navbar>
            <Row className="mobileRoute">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/work" element={<Work />}></Route>
                <Route path="/contact" element={<Contact />}></Route>

                <Route path="/work/half-byte" element={<HalfaByte />}></Route>
                <Route path="/work/likee-xdownloader" element={<LikeeX />}  ></Route>
                {/* <Route path="/work/up-cancer" element={<UpCancer />}></Route> */}
                <Route path="/work/monsterdex" element={<MonsterDex />}></Route>
              </Routes>
            </Row>
          </Router>
        </div>
      ) : (
        <div>
          {/* Desktop layout */}
          <Router>
            {/* Insert Animated Cursor */}
            <AnimatedCursor color="255,0,122" />
            <Row>
              <Col md={2} className="navBar">
                <Row>
                  <Nav className="flex-column">
                    <Navbar.Brand as={NavLink} to="/" className="myTitle top-0">YC</Navbar.Brand>
                    <Nav.Link className="hoverUnderline" as={NavLink} to="/" end>  home <span className="indexText">0</span></Nav.Link>
                    <Nav.Link className="hoverUnderline" as={NavLink} to="/work" > work <span className="indexText">1</span> </Nav.Link>
                    <Nav.Link className="hoverUnderline" as={NavLink} to="/about" > about <span className="indexText">2</span> </Nav.Link>
                    {/* <Nav.Link className="hoverUnderline" as={NavLink} to="/contact" > contact <span className="indexText">3</span> </Nav.Link> */}
                  </Nav>
                </Row>
              </Col>

              <Col className="mainPage">

                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/work" element={<Work />}></Route>
                  {/* <Route path="/contact" element={<Contact />}></Route> */}
                  <Route path="/work/half-byte" element={<HalfaByte />}></Route>
                  <Route path="/work/likee-xdownloader" element={<LikeeX />} ></Route>
                  {/* <Route path="/work/up-cancer" element={<UpCancer />}></Route> */}
                  <Route path="/work/monsterdex" element={<MonsterDex />}  ></Route>
                  {/* <Route path='/work/project-planet' element={< ProjectPlanet />}></Route>*/}
                  {/* <Route path='/work/shark-simulator' element={< SharkSimulator />}></Route> */}
                  {/* <Route path='/❤️' element={< MoreAbout />}></Route> */}
                </Routes>

                <Container className="myFooter">
                  <Row>
                    <Col className="iconBtn">
                      <IconButton sx={{ color: "#FF007a", backgroundColor: "#FFe600", ":hover": { color: "#ffffff", backgroundColor: "#ff007a" } }} aria-label="Linkedin" href="https://www.linkedin.com/in/yung-chu-chuang/" target="_blank" className="contact-btn">
                        <LinkedInIcon />
                      </IconButton>
                    </Col>
                    <Col className="iconBtn">
                      <IconButton sx={{ color: "#FF007a", backgroundColor: "#FFe600", ":hover": { color: "#ffffff", backgroundColor: "#ff007a" } }} aria-label="GitHub" href="https://github.com/yungpiggy1219" target="_blank" className="contact-btn">
                        <GitHubIcon />
                      </IconButton>
                    </Col>
                    <Col className="iconBtn">
                      <IconButton sx={{ color: "#FF007a", backgroundColor: "#FFe600", ":hover": { color: "#ffffff", backgroundColor: "#ff007a" } }} aria-label="add an alarm" href="mailto:yungchu1219@gmail.com" target="_blank" className="contact-btn" >
                        <EmailIcon />
                      </IconButton>
                    </Col>
                  </Row>
                  <Row className="justify-content-center mt-3 ">
                    👾 2023 ©️ Made with ❤️ by Yung-Chu Chuang 🥰
                  </Row>
                </Container>
              </Col>
            </Row>
            {/* <div className="myParticles">
              <Particles
                id="tsparticles"
                init={particlesInit}

                options={{
                  "fullScreen": {
                    "enable": true,
                    "zIndex": 1
                  },
                  "particles": {
                    "number": {
                      "value": 10,
                      "density": {
                        "enable": false,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#fff"
                    },
                    "shape": {
                      "type": "circle",
                      "options": {
                        "sides": 5
                      }
                    },
                    "opacity": {
                      "value": 0.8,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 4,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "rotate": {
                      "value": 0,
                      "random": true,
                      "direction": "clockwise",
                      "animation": {
                        "enable": true,
                        "speed": 5,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 600,
                      "color": "#00ffb3",
                      "opacity": 0.8,
                      "width": 2
                    },
                    "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": ["grab"]
                      },
                      "onclick": {
                        "enable": false,
                        "mode": "bubble"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true,
                  "background": {
                    "color": "#transparent",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover",
                  }
                }}
              />
            </div> */}
          </Router>

        </div>
      )
      }
    </div >
  );
}
export default App;
