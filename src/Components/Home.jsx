import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/AryanKumarResume1.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null); // Declare the typedRef

  useEffect(() => {
    const options = {
      strings: [
        "Welcome To My Profile",
        "My Name Is Aryan Kumar",
        "I'm a Frontend Developer",
        "Android Developer (React Native)"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures it runs once

  return (
    <>
      <div className="container home " id='home'>
        <div className="left"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1>
            <span ref={typedRef}></span> {/* Attach typedRef here */}
          </h1>
          <p>Thanks For Visiting</p>

          <a
            href={pdf}
            download="AryanKumarResume1.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img src="/assets/hero/image.jpg" alt="Profile" />
            {/* Ensure image is placed in the public/assets/hero folder */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
