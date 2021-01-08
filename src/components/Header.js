import React from 'react';
import styled from 'styled-components';
import {Navbar , Nav, NavItem} from 'react-bootstrap';
import Home from './Home.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';



function Header(){
    return (
        <Router>
        <div>
        <Navbar className="mb-0" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand style={ {color:"white" } }> Portfolio|Farhana Khan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <NavDiv>
        <Nav>
          <NavItem> <Link className="nav-link" to="/">Home</Link> </NavItem>
          <NavItem> <Link className="nav-link" to="/about">About</Link> </NavItem>
          <NavItem> <Link className="nav-link" to="/skills">Skills</Link> </NavItem>
          <NavItem> <Link className="nav-link" to="/projects">Projects</Link> </NavItem>
          <NavItem> <Link className="nav-link" to="/contact">Contact</Link> </NavItem>
          <NavItem> <a className="nav-link" href="https://drive.google.com/file/d/1sIA9sgTuoRVaR9u_q7_l8vTHIT67nFMw/view?usp=sharing" target="_blank" rel="noopener noreferrer" >Resume</a> </NavItem>
        </Nav>
        </NavDiv>
        
        </Navbar.Collapse>
        </Navbar>


      
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/skills' component={Skills} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              
          </Switch>
        </div>
      </Router>
    )
}





export default Header;



const NavDiv = styled.div`
margin-left: auto;
`


