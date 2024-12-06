import React, { useEffect } from 'react';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init();
  
  }, [])
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Project />
        <Contact />

      </div>

    </div>
  );
}

export default App;
