import React, { useEffect, useState } from "react";
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown'
import Skills from "./skills";
import Aos from "aos";
import "aos/dist/aos.css";



const About = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  },[]);
  const [isDesktop,setDesktop] = useState(window.innerWidth > 787)
  const updateMedia = () =>{
    setDesktop(window.innerWidth >767); 
  };

useEffect(() => {
  window.addEventListener("resize",updateMedia);
  return () => window.removeEventListener("resize",updateMedia);
});

return(
  <div>
    {isDesktop ? (
      <div data-aos = "fade-down">
        <div  className="about-section1" >
          <h1 className = "about-body">
            Hi Everyone, I am <strong class="purple">Uday Chandra </strong>
            from Telangana.</h1>
            <h1 className = "about-body">pursuing my undergraduate degree in</h1>
            <h1 className = "about-body">Computer Science Engineering from</h1>
            <h1 className = "about-body" >Indian Institute of Information Technology Tiruchirappalli</h1>
            <br/><br/><br/>
        </div>
        <div display="flex">
          <br/><br/>
          <h1 className = "about-body" >Ambivert Person | E-Sports | Physical Fitness | Health Freak | Adventurous </h1>
            <br /><br/><br/>
            <p class="about-quote"><strong>Motivation is what gets you started, Habit is what keeps you going.</strong></p>

           
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <UseAnimations
                
                animation={arrowDown}
                size={150}
                style={{ padding: 100 }}
                strokeColor="grey"
                
                />
       
        </div> 
        
        < Skills/>
        
        
      </div>

    ):
    (
      <div>
        <div  className="about-section1" >
          <h1 className = "about-body-mobile">
            Hi Everyone,</h1>
            <h1 className = "about-body-mobile">I am <strong class="purple">Uday Chandra </strong></h1>
            <h1 className = "about-body-mobile">from Telangana.</h1>
            <h1 className = "about-body-mobile">pursuing my undergraduate degree in</h1>
            <h1 className = "about-body-mobile">Computer Science Engineering from</h1>
            <h1 className = "about-body-mobile" >Indian Institute of Information Technology Tiruchirappalli</h1>
            <br/><br/><br/>
        </div>
        <div display="flex">
          <h1 className = "about-body-mobile" >Ambivert Person | E-Sports | Physical Fitness |</h1>
          <h1 className = "about-body-mobile"> | Health Freak | Adventurous |</h1>
            <br/><br/><br/>
          <p class="about-quote">Motivation is what gets you started, Habit is what keeps you going.</p>
            
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <UseAnimations
                
                animation={arrowDown}
                size={70}
                style={{ padding: 100 }}
                strokeColor="grey"
                
                />
       
        </div> 
        
        < Skills/>


      </div>

    )}
  </div>


);

};
export default About;
