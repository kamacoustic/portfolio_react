import React from 'react' 
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {

    return(
        <div className='header'>
            <Link 
                activeClass='active'
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Home</Link>
            
            <Link 
                activeClass='active'
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >About</Link>

            <Link 
                activeClass='active'
                to="Works"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Works</Link>
            

            <Link 
                activeClass='active'
                to="Contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contact</Link>
            
        </div>
    )
}

export default Header