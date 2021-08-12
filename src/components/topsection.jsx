import React from "react";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";





export function TopSection() {
  return (
    <div className="TopSectionContainer"> 
        <h1 className="Leftlogos"><ImGithub /></h1> 
        <h1 className="Leftlogos"><SiGmail /></h1> 

        
    </div> 
    
  );
}