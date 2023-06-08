import "./style/App.css";
// import Nav from "./component/Nav";
import HomePage from "./component/HomePage";
import About from "./component/About";
import Maps from "./component/Maps";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";

import "./style/Navbar.css";
// import React, {useState} from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import About from "./About";
// import HomePage from "./HomePage";
// import Contact from "./Contact";
// import Gallery from "./Gallery";
// import HomePage from "./HomePage";
// import Maps from "./Maps";
// import { BrowserRouter } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
//import { useState } from "react";
// import Nav from "react-bootstrap/Nav";

//import { HashLink as Link } from "react-router-hash-link";
// import {useState, useEffect} from 'react'

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Navbar className="headerNav fixed-top">
            <Container>
              <Navbar.Brand href="">
                {" "}
                <h1 className="title">Galleri Kopi</h1>
              </Navbar.Brand>
              <ul className="navbar-nav mr-auto navigation">
                <li className="nav-item active ">
                  <a className="nav-link" href="#homepage">
                    <h4>Home</h4>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#about">
                    <h4>About</h4>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#maps">
                    <h4>Maps</h4>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#gallery">
                    <h4>Gallery</h4>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#contact">
                    <h4>Contact</h4>
                  </a>
                </li>
              </ul>

              <ul className="sosmed text-end">
                <li>
                  <a href="https://wa.me/6282114121534">
                    <span className="fa fa-whatsapp"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gallerikopi/">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </Container>
          </Navbar>
        </div>
        <section id="homepage">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="maps">
          <Maps />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
