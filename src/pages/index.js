
import Footer from "./footer";
import About from "./about"
import test from "../images/test1.png"
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from 'react-bootstrap/Button';


const Home = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  },[]);
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
        <div >
          <div data-aos = "fade-down" style={{ display:'flex'}}>
            <img  className="myAvtar" src = {test} alt="avtar" />
            <h1  className="home-content"><span > Hi There ..! </span><br/><br/> I'M 
              <br/><strong class="purple">UDAY CHANDRA BHOOKYA</strong>
              <br/><strong>Computer Science Engineer</strong>
              <h3>Indian Institute of Information Technology Tiruchirappalli</h3>
              <Button variant="primary" 
                onClick={()=> window.open("https://drive.google.com/file/d/11xx9QVAvVbNK6yhoZ_i5ofz1z-uafiqF/view?usp=sharing", "_blank")}>
                View Resume</Button>
            </h1>

          </div>
          <About/>
          <Footer/>
          
          
        </div>
      ) : //mobie view-----------------------------------------------------------
      (
        <div>
          <div  style={{ display:'flex' , flexDirection: 'column'}}>
            <img  className="myAvtar_mobile" src = {test} alt="avtar" />
            <h1  className="home-content-mobile"><span class="purple">  Hi There ..! </span><br/><br/> I'M <br/>
            <strong class="purple">UDAY CHANDRA B</strong>
            <br/><br/><strong>Computer Science Engineer</strong></h1>
            
          </div>
          
          <About/>
          <Footer/>

        </div>
      )}
    </div>

  );
};

export default Home;
