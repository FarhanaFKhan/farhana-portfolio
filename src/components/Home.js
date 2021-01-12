import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';

function Home(){
    return (
            
            <StyledContainer fluid>
            <StyledJumbotron fluid>
             
            <Bounce top>
            <Heading>Aspiring Full Stack Web Developer</Heading> 
            </Bounce>           
              
            </StyledJumbotron>         
            </StyledContainer>
    )
}





export default Home;


const StyledJumbotron = styled(Jumbotron)`
    background-image: linear-gradient(to right, rgb(228, 177, 221), rgb(31, 27, 31)); 
    width: 100%;
    height: 100vh;
    margin-left:0px;
`
const Heading = styled.h1 `
    margin-top: 30vh;
    font-size: 60px;
    color: #fff;
    text-align: center;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
    @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
    }
`

const StyledContainer = styled(Container)`
    height: 100vh;
    padding:0px;
`
