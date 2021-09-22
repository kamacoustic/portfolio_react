import React from 'react' 
import './Gallery.css'


const Gallery = ({ modal, gallery_pic, gallery_desc}) => {

    return (
        <div className="gallery_container">
                {gallery_pic}      
            <div className="desc">
                {gallery_desc}
            </div>
            {modal}
        </div>
       
    )
}

export default Gallery

