import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Gallery from './components/Gallery'
import IconLinks from './components/IconLinks'
import Doomzu_Pic from './components/images/doomzu.jpg'
import Bot_Pic from './components/images/joke_teller_bot.jpg'
import Breathe_Pic from './components/images/just_breathe.jpg'
import HnN_Pic from './components/images/h_n.jpg'
import bg_vid from './components/videos/green_white.mp4'
import ModalJoke from './components/Modals/ModalJoke'
import ModalHere from './components/Modals/ModalHere'
import ModalDoom from './components/Modals/ModalDoom'
import ModalBreathe from './components/Modals/ModalBreathe'
import ModalGit from './components/Modals/ModalGit'
import ModalLinked from './components/Modals/ModalLinked'
import ModalContact from './components/Modals/ModalContact'
import './App.css';

const App = () => {
 
  const [ModalJokeOpen, setOpenJokeModal ] = useState(false)
  const [ModalDoomOpen, setOpenDoomModal] = useState(false)
  const [ModalBreatheOpen, setOpenBreatheModal] = useState(false)
  const [ModalHereOpen, setOpenHereModal] = useState(false)
  const [ModalGitOpen, setOpenGitModal] = useState(false)
  const [ModalLinkedOpen, setOpenLinkedModal] = useState(false)
  const [ModalContactOpen, setOpenContactModal] = useState(false)

  const openModalJoke = () => {
   setOpenJokeModal(true)
  }

  const openModalDoom = () => {
    setOpenDoomModal(true)
  }

  const openModalBreathe = () => {
    setOpenBreatheModal(true)
  }

  const openModalHere = () => {
    setOpenHereModal(true)
  }

  const openModalGit = () => {
    setOpenGitModal(true)
  }

  const openModalLinked = () => {
    setOpenLinkedModal(true)
  }

  const openModalContact = () => {
    setOpenContactModal(true)
  }



 


  
    return (
      <div>
        <Header />

        <Section
        secTitle="Home" 
        secHeader="Welcome" 
        vid={<video id="home_video_bg" preload="auto" autoPlay={true} loop="loop" muted="muted">
            <source src={bg_vid} type="video/mp4" />
              </video>}
        />

        <Section
         secTitle="About" 
         secText="My name is Kelvin Joel Mojica and I am a web developer looking to take my expertise to
         the next level in helping anyone and everyone when it comes to their development and or software needs.
         With technology and the internet becoming more and more present within our daily lives, it is imperative
         that one heeds the new age pivot and answer the calls inbound. Brandishing expertise in HTML5, CSS, Javascript,
         Node.js, and React, I am more than confident in utilzing my ever-growing skillset and natural resourcefulness 
         to provide the best solutions possible!" 
         htmlIcon= {<i className="fab fa-html5"></i>}
         cssIcon={<i className="fab fa-css3"></i>}
         jsIcon={<i className="fab fa-js"></i>}
         nodeIcon={<i className="fab fa-node"></i>}
         reactIcon={<i className="fab fa-react"></i>}
         />

        <Section 
        secTitle="Works" 
        secHeader= {"Here are some examples of what I've created lately. . . ."}

        gallery_one= {<Gallery 
         
              gallery_pic ={<img onClick={openModalJoke} className="bot_pic" src={Bot_Pic} alt="bot" />}
              gallery_desc={<p>J, the joke telling bot! Utilizing two different api's
              and asynchronous JS to feed jokes and transcribe them into speech, delight yourself with this
              fun little "bot."</p>}
              gallery_link={"http://themojoworks.com/portfolio_main/joke_teller_bot/index.html"}
              modal={ModalJokeOpen && <ModalJoke closeModal={setOpenJokeModal} />}
          />}

          
         

        gallery_two={<Gallery
              gallery_pic = {<img onClick={openModalDoom}  className="doomzu_pic" src={Doomzu_Pic} alt="doomzu" />}
              gallery_desc = {<p>A time capsule of sorts for my friends and I D&D campaign! 
                This was built from scratch utilzing HTML5, CSS, and Javascript. No, I did
                not draw the awesome images but I utilized Photoshop to be able to use them
                in the site. </p>}
              gallery_link={"http://themojoworks.com/doomzu/index.html"}
              modal={ModalDoomOpen && <ModalDoom closeModal={setOpenDoomModal}/>}
              
             
          />}

        gallery_three= {<Gallery
              gallery_pic= {<img onClick={openModalBreathe} className="breathe_pic" src={Breathe_Pic} alt="breathe" />}
              gallery_desc= {<p>A simple yet powerful little display of CSS animation and time based
                Javascript!</p>}
              gallery_link={"http://themojoworks.com/portfolio_main/just_breathe/breatheindex.html"}
              modal={ModalBreatheOpen && <ModalBreathe closeModal={setOpenBreatheModal}/>}
        /> }

        gallery_four= {<Gallery
              gallery_pic= {<img onClick={openModalHere}  className="hnn_pic" src={HnN_Pic} alt="h_n" />}
              gallery_desc= {<p>A nifty weather app that utilzes Node, Express, Handlebars, and two API's to bring you the current weather conditions
              based on whichever major city lies near. </p>}
              gallery_link={"http://mojica-weather-application.herokuapp.com"}
              modal={ModalHereOpen && <ModalHere closeModal={setOpenHereModal}/>}
              
              
        /> }
        
        secFooter={"Aaaaand of course this landing page itself! Now brought to you by REACT!"}
        secText={"Code is available for viewing at my Github! Icon Link to page down below!"}
        />

        <Section
        secTitle="Contact" 
        secHeader="So you want to get ahold of me eh?"  
        contact_button={<button onClick={openModalContact} className="cta-btn" id="open">Email Me!</button>}
        modal_contact={ModalContactOpen && <ModalContact closeModal={setOpenContactModal} />}
        

        comp_icons={<IconLinks
          contact_icon_git={<i onClick={openModalGit} className="fab fa-github"></i>}
          contact_icon_link={<i onClick={openModalLinked} className="fab fa-linkedin"></i>}
          modal_git={ModalGitOpen && <ModalGit closeModal={setOpenGitModal} />}
          modal_linked={ModalLinkedOpen && <ModalLinked closeModal={setOpenLinkedModal}/>}
          
          />}
        />

       
        
    
        <Footer />
      </div>
    )
  

}

export default App;
