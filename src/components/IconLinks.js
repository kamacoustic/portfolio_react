import React from 'react' 
import { ExternalLink } from 'react-external-link'
import './IconLink.css'

const IconLinks = ({ contact_icon_git, contact_icon_link}) => {
    
    return (
    <div className='icon_container'>
        <ExternalLink className="icon" href="https://github.com/kamacoustic/portfolio_main">
            {contact_icon_git}
        </ExternalLink>

        <ExternalLink className="icon" href="https://www.linkedin.com/in/themojoworksinc/">
            {contact_icon_link}
        </ExternalLink>
    </div>
    ) 
}

export default IconLinks