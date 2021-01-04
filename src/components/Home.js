import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import styled from 'styled-components';
import '../App.css';

function Home(){
    return (
        <div className="hero-background">
            <StyledJumbotron fluid>
            <StyledContainer>
            <h1 className="glow">Aspiring Full Stack Web Developer</h1>            
            </StyledContainer>
            </StyledJumbotron>
        </div>
    )
}





export default Home;


const StyledJumbotron = styled(Jumbotron)`
 background-image: linear-gradient(to right, rgb(228, 177, 221), rgb(31, 27, 31)); 
 height: 550px;
`

const StyledContainer = styled(Container)`
 margin-top: 0px;
`
