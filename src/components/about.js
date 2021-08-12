import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineLine } from "react-icons/ai";
import { Link } from "react-scroll" ;
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';



export default function About() {

    useEffect(() => {
        Aos.init({ duration: 2000 });    
    }, []);

    return( 

        <div className="aboutsection" id="about" data-aos="fade-up">
            <h1  data-aos="fade-up" className="aboutmain">17 from the UK</h1> 
            <h1  data-aos="fade-down"className="aboutmainElec">Electronics enthusiast </h1> 
            <Link  className="arrow-about" to="earthSection" smooth={true} ><IoIosArrowDown /></Link>
        </div>
        
    );
}
 
