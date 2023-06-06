import "./style/App.css";
import Nav from "./component/Nav";
import HomePage from "./component/HomePage";
import About from "./component/About";
import Maps from "./component/Maps";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import { BrowserRouter } from "react-router-dom";
//import { HashLink as Link } from "react-router-hash-link";
// import {useState, useEffect} from 'react'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <HomePage id="homepage" />
        <About id="about" />
        <Maps id="maps" />
        <Gallery id="gallery" />
        <Contact id="contact" />
      </div>
    </BrowserRouter>
  );
}

export default App;
