import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ContactForm from "./components/ContactForm"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: "Erik Rudhe", 
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"}
      ],
      home: {
        title: "Hello world",
        subTitle: "Welcome to my portfolio",
        text: "Please checkout some of my projects below"
      },
      about: {
        title: "About me",
        text:"I like to tell you a little about myself "
      },
      contact: {
        title: "Let's talk"
      }

    }
  }
  render(){
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="sm">
            <Navbar.Brand>Erik Rudhe</Navbar.Brand>
          
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/"  >Home</Link>
                <Link className="nav-link" to="/about" >About</Link>
                <Link className="nav-link" to="/contact" >Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() =>  <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> }/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} text={this.state.about.text}/> } />
          <Route path="/contact" render={() => <ContactForm title={this.state.contact.title} /> } />

          <Footer/>
        </Container>
      </Router>
    )
  }
}

export default App