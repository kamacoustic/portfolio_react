import React from 'react' 
import { ExternalLink } from 'react-external-link'
import './Gallery.css'


const Gallery = ({ gallery_pic, gallery_desc, gallery_link}) => {

    return (
        <div className="gallery_container">

        <ExternalLink href={gallery_link}>
                {gallery_pic}
           </ExternalLink>
            <div className="desc">
                {gallery_desc}
            </div>
        </div>

    )
}

export default Gallery

