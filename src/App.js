import logo from './logo.svg';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </Router>


    // <main>
    //   {/* <Navbar /> */}
    //   {/* <Home /> */}
    //   <Work />
    //   <About />
    //   <Contact />

    // </main>
  );

}
export default App;