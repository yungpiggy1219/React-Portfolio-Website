import logo from './logo.svg';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <main>
      <Router>
        <div className="App">
          <Row>
            <Col md={2} className=''>
              <Nav variant="tabs" defaultActiveKey="/" className="flex-column">
                <Link to="/" className="nav-link active">home</Link>
                <Link to="/about" className="nav-link">about</Link>
                <Link to="/work" className="nav-link">work</Link>
                <Link to="/contact" className="nav-link">contact</Link>
              </Nav>
            </Col>

            <Col>
              <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/work' element={< Work />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
              </Routes>
            </Col>
          </Row>
        </div>
      </Router>
    </main>
  );

}
export default App;