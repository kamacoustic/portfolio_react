import React from 'react' 
import './Section.css'

const Section = ({secTitle, 
                  secText, 
                  secHeader, 
                  secFooter, 
                  vid,
                  htmlIcon, 
                  cssIcon, 
                  jsIcon, 
                  nodeIcon, 
                  reactIcon, 
                  gallery_one, 
                  gallery_two, 
                  gallery_three, 
                  gallery_four,
                  contact_button,
                  comp_icons,
                  modal_contact,
                  linkToPrev
                }) => {

    return (
        <div className='section' id={secTitle}>
            <h1>{secTitle}</h1>
            <h2>{secHeader}</h2>
            {/* Video for home section*/}
            {vid}
            {/* This is for the Works section */}
            {gallery_one}
            {gallery_two}
            {gallery_three}
            {gallery_four}
            <h2>{secFooter}</h2>
            {linkToPrev}
            <p>{secText}</p>
            {/* Icons for About section */}
            <div className ='icons'>
                {htmlIcon}
                {cssIcon}
                {jsIcon}
                {nodeIcon}
                {reactIcon}
            </div>
            {/* For the contact section */}
            {contact_button}
            {modal_contact}
            {comp_icons}
        </div>
        
    )
}

export default Section 