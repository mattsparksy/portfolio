import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FiTwitter, FiCpu } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';




export function TopSection() {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });    
  }, []);
  
  return ( 

    

    <div>
      <div className="TopSectionContainer"> 
          <a data-aos="fade-right" href="https://github.com/mattsparksy" className="Leftlogos"><ImGithub /></a> 
          <a data-aos="fade-left" href="mailto:mattswyt124@gmail.com" className="Leftlogos"><SiGmail /></a> 
      </div> 
      <div className="TopSectionRight">
          <a data-aos="fade-right" href="https://twitter.com/mattsparksy" className="RightLogos"><FiTwitter /></a> 
          <a data-aos="fade-left" href="https://mattsparksy.github.io/html-css-prac/work.html" className="RightLogos"><FiCpu /></a>
      </div>
    </div>

    
  );
}