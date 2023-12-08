import React, { useEffect, useState } from "react";

import Skills from "./skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from 'react-bootstrap/Button';



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
      <div data-aos = "fade-right">
        <div className="about-section1" >
          <h1 className = "about-sub" > <strong class="purple">About me :</strong></h1>
          <h1 className="about-body">Hello, My name is <strong>Uday.</strong> I'm from India.An enthusiastic fresher with highly motivated 
          and leadership skills having bachelors of engineering degree in Computer Science. My passion for engineering and tech has 
          been increased day by day..</h1>
        
          <h1  data-aos = "fade-up" className = "about-sub" > <strong class="purple">Education : </strong></h1>
          <h2  data-aos = "fade-up" className="about-body"><strong>B.Tech in Computer Science & Engineering</strong> 
          <br/><p style={{opacity:"70%"}}>Indian Institute of Information Technology, Tiruchirappalli
          <br/>CGPA: 7.5, Year: 2018-2022</p>
          </h2>

          <h2  data-aos = "fade-up" className="about-body"><strong>Intermediate</strong> 
          <br/><p style={{opacity:"70%"}}>Narayana Junior College
          <br/>Percentage: 96.9% , Year: 2016-2018</p>
          </h2>

          <h2  data-aos = "fade-up" className="about-body"><strong>High School</strong> 
          <br/><p style={{opacity:"70%"}}>Kendriya Vidyalaya Sangathan 
          <br/>CGPA: 10, Year: 2016</p>
          </h2>
            
              {/* Experience */}

          <h1  data-aos = "fade-up" className = "about-sub" > <strong class="purple">Exprience : </strong></h1>
          <h2  data-aos = "fade-up" className="about-body"><strong>Full-Stack Developer Intern</strong> <span><p 
          style={{opacity:"70%",fontSize:"0.7em"}}>May 2021 – July 2021</p></span>
            <Button style={{opacity:"70%",color:"aqua",fontSize:"1em",textDecoration:"underline"}}variant="https://financepeer.com/">
              LEO1-Financepeer</Button>
            
          </h2>
          <p  data-aos = "fade-up" className="about-body" >
            <ul style={{lineHeight:"1.2em", fontSize:"0.8em"}}>
              <li>Worked on product on Frontend with ReactJs and Backend on Django,Python, and Database: Postgresql.</li>
              <li>Bug fixes and improvements.</li>
              <li>Automations of features which can save time.</li>
              <li>Added new features as per requirement.</li>
              <li>Focused on the code modularity and reusability and we kept the user experience our first priority.</li>
            </ul>
          </p>
                       {/* ----------- */}
          <h2  data-aos = "fade-up" className="about-body"><strong>Data Science Contributor</strong> <span><p style={{opacity:"70%",fontSize:"0.7em"}}>Nov 2020 – Dec 2020</p></span>
            <Button style={{opacity:"70%",color:"aqua",fontSize:"1em",textDecoration:"underline"}}variant="">DevIncept</Button>
            
          </h2>
          <p  data-aos = "fade-up" className="about-body" >
            <ul style={{lineHeight:"1.2em", fontSize:"0.8em"}}>
              <li>One of the Top 15 Contributors.</li>
              <li>Worked on a End to End Recommendations systems project.</li>
              <li>Recommendation System, Data Processing, Machine Learning.</li>
            </ul>
          </p>
        

        </div>
        
        < Skills/>
        
        
      </div>

      ):
      (
        <div>
          <div  className="about-section1" >
            <h1 className = "about-sub-mobile" > <strong class="purple">About me :</strong></h1>
            <h1 style={{textAlign:"justify"}} className="about-body-mobile">Hello, My name is <strong>Uday.</strong> I'm from India.An enthusiastic fresher with highly motivated 
            and leadership skills having bachelors of engineering degree in Computer Science. My passion for engineering and tech has 
            been increased day by day.</h1>
            <br/><br/>
            <h1  data-aos = "fade-up" className = "about-sub-mobile" > <strong class="purple">Education : </strong></h1>
              <h2  data-aos = "fade-up" className="about-body-mobile"><strong>B.Tech in Computer Science & Engineering</strong> 
              <br/><p style={{opacity:"70%"}}>Indian Institute of Information Technology, Tiruchirappalli
              <br/>CGPA: 7.5, Year: 2018-2022</p>
              </h2>

              <h2  data-aos = "fade-up" className="about-body-mobile"><strong>Intermediate</strong> 
              <br/><p style={{opacity:"70%"}}>Narayana Junior College
              <br/>Percentage: 96.9% , Year: 2016-2018</p>
              </h2>

              <h2  data-aos = "fade-up" className="about-body-mobile"><strong>High School</strong> 
              <br/><p style={{opacity:"70%"}}>Kendriya Vidyalaya Sangathan 
              <br/>CGPA: 10, Year: 2016</p>
              </h2>
            <br/><br/>
            <h1  data-aos = "fade-up" className = "about-sub-mobile" > <strong class="purple">Exprience : </strong></h1>
            <h2  data-aos = "fade-up" className="about-body-mobile"><strong>Full-Stack Developer Intern</strong> <span><p 
            style={{opacity:"70%",fontSize:"0.7em"}}>May 2021 – July 2021</p></span>
              <Button style={{opacity:"70%",color:"aqua",fontSize:"1em",textDecoration:"underline"}}variant="https://financepeer.com/">
                Financepeer</Button>
              
            </h2>
            <p  data-aos = "fade-up" className="about-body-mobile" >
              <ul style={{lineHeight:"1.2em", fontSize:"0.8em"}}>
                <li>Worked on product on Frontend with ReactJs and Backend on Django,Python, and Database: Postgresql.</li>
                <li>Bug fixes and improvements.</li>
                <li>Automations of features which can save time.</li>
                <li>Added new features as per requirement.</li>
                <li>Focused on the code modularity and reusability and we kept the user experience our first priority.</li>
              </ul>
            </p>
                        {/* ----------- */}
            <h2  data-aos = "fade-up" className="about-body-mobile"><strong>Data Science Contributor</strong> <span><p style={{opacity:"70%",fontSize:"0.7em"}}>Nov 2020 – Dec 2020</p></span>
              <Button style={{opacity:"70%",color:"aqua",fontSize:"1em",textDecoration:"underline"}}variant="">DevIncept</Button>
              
            </h2>
            <p  data-aos = "fade-up" className="about-body-mobile" >
              <ul style={{lineHeight:"1.2em", fontSize:"0.8em"}}>
                <li>One of the Top 15 Contributors.</li>
                <li>Worked on a End to End Recommendations systems project.</li>
                <li>Recommendation System, Data Processing, Machine Learning.</li>
              </ul>
            </p>


              
          </div>
           
          
          < Skills/>


        </div>

    )}
  </div>


);

};
export default About;
