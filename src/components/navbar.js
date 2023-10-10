import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../images/final_logo.png";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { FaHSquare } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  // AiOutlineUser,
} from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      justifyContent = "center"
    >
      <Container>
        {/* <Navbar.Brand href="/portfolio"> */}
          {/* <img src={logo1} className="img-fluid logo" alt="brand" /> */}
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        {/* </Navbar.Brand> */}
        {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/portfolio" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/hobbies"
                onClick={() => updateExpanded(false)}
              >
                <FaHSquare style={{ marginBottom: "2px" }} /> obbies
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;