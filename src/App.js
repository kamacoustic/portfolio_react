import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Modal from './components/Modal'
import Gallery from './components/Gallery'
import IconLinks from './components/IconLinks'
import Doomzu_Pic from './components/images/doomzu.jpg'
import Bot_Pic from './components/images/joke_teller_bot.jpg'
import Breathe_Pic from './components/images/just_breathe.jpg'
import HnN_Pic from './components/images/h_n.jpg'
import bg_vid from './components/videos/green_white.mp4'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.secTitle = this.secTitle
    this.secText = this.secText
    this.secHeader = this.secHeader
    this.secFooter = this.secFooter
    this.vid = this.vid
    this.htmlIcon = this.htmlIcon
    this.cssIcon = this.cssIcon
    this.jsIcon = this.jsIcon
    this.nodeIcon = this.nodeIcon
    this.reactIcon = this.reactIcon
    this.gallery_one = this.gallery_one
    this.gallery_two = this.gallery_two
    this.gallery_three = this.gallery_three
    this.gallery_four = this.gallery_four
    this.gallery_pic = this.gallery_pic
    this.gallery_desc = this.gallery_desc
    this.gallery_link = this.gallery_link
    this.contact_button = this.contact_button
    this.contact_icon_git = this.contact_icon_git
    this.contact_icon_link = this.contact_icon_link
    this.comp_icons = this.comp_icons
  }




  render(){
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
          gallery_pic ={<img className="bot_pic" src={Bot_Pic} alt="bot" />}
          gallery_desc={<p>J, the joke telling bot! Utilizing two different api's
          and asynchronous JS to feed jokes and transcribe them into speech, delight yourself with this
          fun little "bot."</p>}
          gallery_link={"http://themojoworks.com/portfolio_main/joke_teller_bot/index.html"}
          />}

        gallery_two={<Gallery
          gallery_pic = {<img className="doomzu_pic" src={Doomzu_Pic} alt="doomzu" />}
          gallery_desc = {<p>A time capsule of sorts for my friends and I D&D campaign! 
            This was built from scratch utilzing HTML5, CSS, and Javascript. No, I did
            not draw the awesome images but I utilized Photoshop to be able to use them
            in the site. </p>}
          gallery_link={"http://themojoworks.com/doomzu/index.html"}
          />}

        gallery_three= {<Gallery
          gallery_pic= {<img className="breathe_pic" src={Breathe_Pic} alt="breathe" />}
          gallery_desc= {<p>A simple yet powerful little display of CSS animation and time based
            Javascript!</p>}
          gallery_link={"http://themojoworks.com/portfolio_main/just_breathe/breatheindex.html"}
        /> }

        gallery_four= {<Gallery
          gallery_pic= {<img className="hnn_pic" src={HnN_Pic} alt="h_n" />}
          gallery_desc= {<p>A nifty weather app that utilzes Node, Express, Handlebars, and two API's to bring you the current weather conditions
          based on whichever major city lies near. </p>}
          gallery_link={"http://mojica-weather-application.herokuapp.com"}
        /> }
        
        secFooter={"Aaaaand of course this landing page itself! Now brought to you by REACT!"}
        secText={"Code is available for viewing at my Github! Icon Link to page down below!"}
        />

        <Section
        secTitle="Contact" 
        secHeader="So you want to get ahold of me eh?"  
        contact_button={<button onClick={this.openModal} className="cta-btn" id="open">Email Me!</button>}
        

        comp_icons={<IconLinks
          contact_icon_git={<i className="fab fa-github"></i>}
          contact_icon_link={<i className="fab fa-linkedin"></i>} />}
        />
        
        <Footer />
      </div>
    )
  }

}

export default App;
