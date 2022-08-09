import React, { useEffect, useState } from "react";
import {Row, Col} from "react-bootstrap";
import {
    SiPandas,
    SiVisualstudiocode,
    SiJupyter,
    SiPostman,
    SiHeroku,
    SiPycharm,
    SiPython,SiDjango,SiReact,SiTensorflow,SiHtml5,
    SiCsswizardry,SiCloudera,SiFlask,SiMysql,SiScikitlearn,SiGooglecloud
  } from "react-icons/si";
import {ImDatabase} from "react-icons/im"
import Aos from "aos";
import "aos/dist/aos.css";


const Skills = () =>{
    useEffect(() => {
        Aos.init({duration:2000});
      },[]);
    const [isDesktop,setDesktop] = useState(window.innerWidth>767)
    const updateMedia = () =>{
        setDesktop(window.innerWidth>767);
    };

    useEffect(()=> {
        window.addEventListener("resize",updateMedia);
        return () => window.removeEventListener("resize",updateMedia);
    });

    return(
        <div>            
            {isDesktop ?(
                <div style={{paddingLeft:"5em", paddingRight:"5em"}}>
                    <h1 className="skill-sub"><strong class="purple">Technologies I'm familiar with: </strong></h1>
                    <Row data-aos = "fade-up" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Col  xs={4} md={2} className="tech-icons" >
                            <SiPython />
                            <p style={{fontSize:"0.3em"}}>Python</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiCloudera />
                            <p style={{fontSize:"0.3em"}}>C-Language</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">    
                            <SiDjango />
                            <p style={{fontSize:"0.3em"}}>Django</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">    
                            <SiFlask />
                            <p style={{fontSize:"0.3em"}}>Flask</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiReact />
                            <p style={{fontSize:"0.3em"}}>React</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiTensorflow />
                            <p style={{fontSize:"0.3em"}}>Tensorflow</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiScikitlearn />
                            <p style={{fontSize:"0.3em"}}>Scikitlearn</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiHtml5 />
                            <p style={{fontSize:"0.3em"}}>Html5</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiCsswizardry />
                            <p style={{fontSize:"0.3em"}}>Css</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <ImDatabase />
                            <p style={{fontSize:"0.3em"}}>DBMS</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiMysql />
                            <p style={{fontSize:"0.3em"}}>Mysql</p>
                        </Col>
                    </Row>

                    <h1 className="skill-sub"><strong class="purple">Tools I'm familiar with: </strong></h1>
                    <Row data-aos = "fade-up" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons">
                            <SiGooglecloud />
                            <p style={{fontSize:"0.3em"}}>GCP</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiVisualstudiocode />
                            <p style={{fontSize:"0.3em"}}>VScode</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">    
                            <SiJupyter />
                            <p style={{fontSize:"0.3em"}}>Jupyter</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiPandas />
                            <p style={{fontSize:"0.3em"}}>Pandas</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiPycharm />
                            <p style={{fontSize:"0.3em"}}>Pycharm</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiHeroku />
                            <p style={{fontSize:"0.3em"}}>Heroku</p>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiPostman />
                            <p style={{fontSize:"0.3em"}}>Postman</p>
                        </Col>
                    </Row>
                    <br/><br/>
                </div>

// --------------------------------------------------mobile------------------------------------------------------------------

            ):(

                <div style={{paddingLeft:"1em", paddingRight:"1em"}}>
                    <h1 className="skill-sub-mobile"><strong class="purple">Technologies I'm familiar with: </strong></h1>
                    <Row data-aos = "fade-up" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">
                            <SiPython />
                            <p style={{fontSize:"0.3em"}}>Python</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">
                            <SiCloudera />
                            <p style={{fontSize:"0.3em"}}>C</p>
                        </Col>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">    
                            <SiDjango />
                            <p style={{fontSize:"0.3em"}}>Django</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">    
                            <SiFlask />
                            <p style={{fontSize:"0.3em"}}>Flask</p>
                        </Col>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">
                            <SiReact />
                            <p style={{fontSize:"0.3em"}}>React</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">
                            <SiTensorflow />
                            <p style={{fontSize:"0.3em"}}>Tensorflow</p>
                        </Col>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">
                            <SiScikitlearn />
                            <p style={{fontSize:"0.3em"}}>Sklearn</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">
                            <SiHtml5 />
                            <p style={{fontSize:"0.3em"}}>Html5</p>
                        </Col>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">
                            <SiCsswizardry />
                            <p style={{fontSize:"0.3em"}}>Css</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">
                            <ImDatabase />
                            <p style={{fontSize:"0.3em"}}>DBMS</p>
                        </Col>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">
                            <SiMysql />
                            <p style={{fontSize:"0.3em"}}>Mysql</p>
                        </Col>
                    </Row>

                    <h1 className="skill-sub-mobile"><strong class="purple">Tools I'm familiar with: </strong></h1>
                    <Row data-aos = "fade-up" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Col data-aos = "fade-left"xs={4} md={2} className="tech-icons">
                            <SiGooglecloud />
                            <p style={{fontSize:"0.3em"}}>GCP</p>
                        </Col>
                        <Col data-aos = "fade-left"xs={4} md={2} className="tech-icons">
                            <SiVisualstudiocode />
                            <p style={{fontSize:"0.3em"}}>VScode</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">    
                            <SiJupyter />
                            <p style={{fontSize:"0.3em"}}>Jupyter</p>
                        </Col>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">
                            <SiPandas />
                            <p style={{fontSize:"0.3em"}}>Pandas</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">
                            <SiPycharm />
                            <p style={{fontSize:"0.3em"}}>Pycharm</p>
                        </Col>
                        <Col data-aos = "fade-left" xs={4} md={2} className="tech-icons">
                            <SiHeroku />
                            <p style={{fontSize:"0.3em"}}>Heroku</p>
                        </Col>
                        <Col data-aos = "fade-right" xs={4} md={2} className="tech-icons">
                            <SiPostman />
                            <p style={{fontSize:"0.3em"}}>Postman</p>
                        </Col>
                    </Row>
                </div>



            )
            
        
        
        }

        </div>
    );

};

export default Skills;