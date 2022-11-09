import "../style/Navbar.css";
// import React, {useState} from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

function Navi() {
  return (
    <div>
      <Navbar className="headerNav fixed-top">
        <Container>
          <Navbar.Brand href="">
            {" "}
            <h1 className="title">Galleri Kopi</h1>
          </Navbar.Brand>
          <ul className="navbar-nav mr-auto navigation">
            <li className="nav-item active ">
              <a className="nav-link" href="#">
                <h4>Home</h4>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h4>Menu</h4>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h4>About</h4>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h4>Maps</h4>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h4>Gallery</h4>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h4>Contact</h4>
              </a>
            </li>
          </ul>

          <ul className="sosmed text-end">
            <li>
              <a href="#">
                <span className="fa fa-facebook"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-whatsapp"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-instagram"></span>
              </a>
            </li>
          </ul>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
