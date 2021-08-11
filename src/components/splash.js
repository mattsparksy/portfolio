import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Header() {
    const styles = 
    
    useSpring({
        

        to: { opacity: 1, color: 'white' }, 
                 
        from: { opacity: 0, color: 'black' },
      })
      // ...
      return <animated.div style={styles}>mattsparksy</animated.div>
}
