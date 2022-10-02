import logo from './logo.svg';
import './App.css';

import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <Work />
      {/* <About /> */}
      <Contact />
    
    </main>
  );
  
}
export default App;