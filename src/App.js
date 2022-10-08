import logo from './logo.svg';
import './App.css';
import AnimatedCursor from "react-animated-cursor"

import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";

import HalfaByte from "./pages/HalfaByte";
import UpCancer from "./pages/UpCancer";
import LikeeX from "./pages/LikeeX";

function App() {

  return (
    <Router>
      <AnimatedCursor
        color="255,0,122"
      />
      <Row>
        <Col md={2} className='navBar'>
          <Row>

            <Nav className="flex-column">
            <Navbar.Brand as={NavLink} to="/" className='myTitle top-0'>Yung-Chu Chuang</Navbar.Brand>
              <Nav.Link className='hoverUnderline' as={NavLink} to="/" end>home <span className='indexText'>0</span></Nav.Link>
              <Nav.Link className='hoverUnderline' as={NavLink} to="/about">about <span className='indexText'>1</span></Nav.Link>
              <Nav.Link className='hoverUnderline' as={NavLink} to="/work">work <span className='indexText'>2</span></Nav.Link>
              <Nav.Link className='hoverUnderline' as={NavLink} to="/contact">contact <span className='indexText'>3</span></Nav.Link>
            </Nav>
          </Row>
        </Col>

        <Col className='mainPage'>
          <Routes>
            <Route path='/' element={< Home />}></Route>
            <Route path='/about' element={< About />}></Route>
            <Route path='/work' element={< Work />}></Route>
            <Route path='/contact' element={< Contact />}></Route>

            <Route path='/work/half-byte' element={< HalfaByte />}></Route>
            <Route path='/work/likee-xdownloader' element={< LikeeX />}></Route>
            <Route path='/work/up-cancer' element={< UpCancer />}></Route>
          </Routes>
        </Col>
      </Row>
    </Router>
  );
}
export default App;