import React from 'react'
import { useSpring, animated } from 'react-spring'
import Typical from "react-typical"
import { IoIosArrowDown } from 'react-icons/io'
import About from "./about"
import { Link } from "react-scroll"

export default function Header() {
    
    
    const styles = 
    

    useSpring({
        


      })
      // ...
      return (
        <animated.div style={styles} className="titlecontainer">
          <Typical className="titlemain" steps={['mattsparksy']} wrapper="p"></Typical> 
          <Link className="arrow-mainpage" to="about" smooth={true} ><IoIosArrowDown /></Link>
      </animated.div> 
      );
      

      
}

