import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" >
      <Row style={{justifyContent:"center"}}>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/B-UDAY-CHANDRA-001"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={50} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/uday_chandra1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={50} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/uday-chandra/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={50} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/uday.chandra_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={50}/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;