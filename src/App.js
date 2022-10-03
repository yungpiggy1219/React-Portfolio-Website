import logo from './logo.svg';
import './App.css';

import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <Router className="App">
      <Row>
        <Col md={2}>
          <Nav className="flex-column">
            <Nav.Link as={ NavLink } to="/" end>home</Nav.Link>
            <Nav.Link as={ NavLink } to="/about">about</Nav.Link>
            <Nav.Link as={ NavLink } to="/work">work</Nav.Link>
            <Nav.Link as={ NavLink } to="/contact">contact</Nav.Link>
          </Nav>
        </Col>

        <Col>
          <Routes>
            <Route path='/' element={< Home />}></Route>
            <Route path='/about' element={< About />}></Route>
            <Route path='/work' element={< Work />}></Route>
            <Route path='/contact' element={< Contact />}></Route>
          </Routes>
        </Col>
      </Row>
    </Router>
  );

}
export default App;