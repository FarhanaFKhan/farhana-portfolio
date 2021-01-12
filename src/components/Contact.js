import React from 'react';
import styled from 'styled-components';
import { Container} from 'react-bootstrap';
import '../App.css';
import cardFront from '../assets/contact-card.jpeg';
import emailLogo from '../assets/email.png';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin.png';



function Contact(){
    return (
        <Container>
           <Heading>Contact Me</Heading>
           <SubLine>Hover on the card</SubLine>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="img-fluid" src={cardFront} alt="Avatar"/>
              </div>
              <div class="flip-card-back">
                <h1>Farhana Khan</h1>
                <p>Junior Full Stack Developer</p>
                <div class="flip-card-email">
                  <img src={emailLogo} alt="email icon" style={ { width:"25px", height:"25px"}}/>
                  <p>farhanafatema@hotmail.com</p>
                </div>
                <div class="flip-card-github">
                  <img src={githubLogo} alt="github icon" style={ { width:"25px", height:"25px"}}/>
                  <a href="https://github.com/FarhanaFKhan" target="_blank" rel="noopener noreferrer">/FarhanaFKhan</a>
                </div>
                <div class="flip-card-linkedin">
                  <img src={linkedinLogo} alt="linkedin icon" style={ { width:"25px", height:"25px"}}/>
                  <a href="https://www.linkedin.com/in/f-f-khan/" target="_blank" rel="noopener noreferrer" >/f-f-khan</a>
                </div>          
                               
              </div>
            </div>
          </div>
        </Container>
    )
}





export default Contact;

const Heading = styled.h2`
  margin-top: 10vh;
  margin-bottom: 5vh;
  text-align:center;
  letter-spacing: 2px;
  margin-left:0rem;

  @media (max-width:768px){
   margin-left:100px;
  }
`
const SubLine = styled.p `
  text-align:center;
`

