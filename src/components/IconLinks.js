import React from 'react' 
import { ExternalLink } from 'react-external-link'
import './IconLink.css'

const IconLinks = ({ contact_icon_git, contact_icon_link, modal_git, modal_linked}) => {
    
    return (
    <div className='icon_container'>
            <div className="icon">
                {contact_icon_git}
            </div>
        
        {modal_git}

            <div className="icon">
                {contact_icon_link}
            </div>
        
        {modal_linked}
    </div>
    ) 
}

export default IconLinks