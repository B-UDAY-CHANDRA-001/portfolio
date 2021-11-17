// import { width } from 'dom-helpers';
// import React from 'react';
import BackgroundVideo from "../videos/black.mp4";
import Home2 from "./home2";
import test from "../images/test1.png"
import React, { useEffect, useState } from "react";
// const styles = {
//   web_heading: {
//         left:'10em',
//         top:'2em',
        
//   },
// }



const Home = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
const updateMedia = () => {
  setDesktop(window.innerWidth > 767);
};

useEffect(() => {
  window.addEventListener("resize", updateMedia);
  return () => window.removeEventListener("resize", updateMedia);
});


  return (
    <div >
      {isDesktop ? (
        <div>
          <video
            autoPlay loop muted
            style={{
              position: "absolute",
              width: "100%",
              left : "50%",
              top : "50%",
              height : "100%",
              objectFit : "cover",
              transform : "translate(-50%, -50%)",
              zIndex: "-1"


            }}
          
            >
            <source src = {BackgroundVideo} type = "video/mp4"/> 
          </video>
          
            
          
          <div  style={{ display:'flex'}}>
            <img  className="myAvtar" src = {test} alt="avtar" />
            <h1  className="home-content"><span > Hi There ..! </span><br/><br/> I'M 
            <br/><strong class="purple">UDAY CHANDRA BHOOKYA</strong>
            <br/><strong>Computer Science Engineer</strong>
            </h1>
            
           
          <Home2/>
            
          </div>
          
          
          
        
        
          
        </div>
      ) : //mobie view-----------------------------------------------------------
      (
        <div>
          <video
            autoPlay loop muted
            style={{
              position: "absolute",
              width: "100%",
              left : "50%",
              top : "50%",
              height : "100%",
              objectFit : "cover",
              transform : "translate(-50%, -50%)",
              zIndex: "-1"


            }}
          
            >
            <source src = {BackgroundVideo} type = "video/mp4"/> 
          </video>
          
          <div  style={{ display:'flex' , flexDirection: 'column'}}>
            <img  className="myAvtar_mobile" src = {test} alt="avtar" />
            <h1  className="home-content-mobile"><span class="purple">  Hi There ..! </span><br/><br/> I'M <br/>
            <strong class="purple">UDAY CHANDRA B</strong>
            <br/><br/><strong>Computer Science Engineer</strong></h1>
            
          </div>
          

          <Home2/>

        </div>
      )}
    </div>

  );
};

export default Home;
