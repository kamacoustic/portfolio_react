import React, { useState} from 'react' 
import { Link } from 'react-scroll'
import ReorderIcon from '@material-ui/icons/Reorder'
import './Header.css'

const Header = () => {

    const [showLinks, setShowLinks] = useState(false)

 

    return(
        <div className='header' >
            <div className='leftSide' >
                <div className="links" id={showLinks ? "hidden" : ""}>
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

                    <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon /></button>
                </div>

                <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            
        </div>
    )
}

export default Header