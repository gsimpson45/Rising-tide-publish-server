import React from "react"
//import './App.css';
//Already installed bootstrap through the terminal so no need to do it again
import "bootstrap/dist/css/bootstrap.min.css";
//Already installed react-router-dom through the terminal so no need to do it again
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {logOut} from "../features/auth/AuthService"

let bigFont = false;

const toggleFontSize = event => {
  let fontSizeBtn = document.getElementById("fontSizeBtn");
  let labels = document.getElementsByTagName("label");
  let paragraphs = document.getElementsByTagName("p");
  let header1 = document.getElementsByTagName("h1");
  let header2 = document.getElementsByTagName("h2");
  let header3 = document.getElementsByTagName("h3");
  let textarea = document.getElementsByTagName("textarea");

  if(bigFont === false){
    fontSizeBtn.innerHTML = "Reduce Font Size"

    for(let l of labels){
      l.classList.add("bigLabel");
    }
    for(let p of paragraphs){
      p.style = "font-size: 20px"
    }
    for(let h1 of header1){
      h1.classList.add("bigH1");
    }
    for(let h2 of header2){
      h2.classList.add("bigH2");
    }
    for(let h3 of header3){
      h3.classList.add("bigH3");
    }
    for(let ta of textarea){
      ta.classList.add("bigTextArea");
    }
  }
  else{
    fontSizeBtn.innerHTML = "Increase Font Size"
    for(let l of labels){
      l.classList.remove("bigLabel");
    }
    for(let p of paragraphs){
      p.style = "font-size: 16px"
    }
    for(let h1 of header1){
      h1.classList.remove("bigH1");
    }
    for(let h2 of header2){
      h2.classList.remove("bigH2");
    }
    for(let h3 of header3){
      h3.classList.remove("bigH3");
    }
    for(let ta of textarea){
      ta.classList.remove("bigTextArea");
    }
  }
  bigFont = !bigFont;
}

//Fuction that runs when the sign out button is clicked
const signOut = event => {
  logOut();
}

//Not using App.js anymore

function App() {
  return (
    <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="lightblue" variant="light">
      <Container>
        <Navbar.Brand href="/">Rising Tide</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/weeklyView">Weekly View</Nav.Link>
            <Nav.Link href="/archivePage">Archive Page</Nav.Link>
            <Nav.Link href="/helpPage">Help</Nav.Link>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/signUpPage">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/signInPage">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="/" onClick={signOut}>Sign Out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="fontSizeBtn" onClick={toggleFontSize}>Increase Font Size</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;