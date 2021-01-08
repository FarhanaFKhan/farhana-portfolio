import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components';
import html from '../assets/html.png';
import css from '../assets/css.png';
import bootstrap from '../assets/bootstrap-logo.png';
import github from '../assets/github.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import reactB from '../assets/reactB.png';
import styledC from '../assets/styled.png';
import node from '../assets/node.png';
import sql from '../assets/postgreSQL.png';
import git from '../assets/git.png';
import Fade from 'react-reveal/Fade';

function Skills(){
    return (
        <Container>
        <Fade top>
        <StyledRow>
            <Col>
            <Heading>My Skills</Heading>
            <TechHeading>Technical skills:</TechHeading>
            <SkillsBox>
                <TechImg  src={html} alt="html logo" fluid/>
                <TechImg  src={css} alt="csslogo" fluid />
                <TechImg  src={js} alt="jS logo" fluid/>
                <TechImg  src={bootstrap} alt="bootstrap logo" fluid />
                <TechImg  src={styledC} alt="styled components logo" fluid />                
                <TechImg  src={github} alt="github logo" fluid />
                
                <TechImg  src={react} alt="react logo" fluid/>
                <TechImg  src={reactB} alt="reactBootstrap logo" fluid />
                
                <TechImg  src={node} alt="node logo" fluid />
                <TechImg  src={sql} alt="postgreSQL logo" fluid />
                <TechImg  src={git} alt="git logo" fluid />
            </SkillsBox>                           
            </Col>

            <Col>
            <Content>
            <TechHeading>Transferrable Skills:</TechHeading> 
            <ul>
                <ListElement><strong>Organisational skills:</strong> I have always been well organised and managed time efficiently throughout my education and professional years.<br/>
                    My organisational skills helped me achieve a distinction in masters and, recently, helped me complete the eight-month long <a href ='https://syllabus.codeyourfuture.io/' target="_blank"
                     rel="noopener noreferrer">web development course</a>.</ListElement> <br/>
                <ListElement><strong>Communication skills:</strong> I have been a keen public speaker during my academic years, which assisted in developing and enhancing my communication skills. <br/>
                    As part of <a href= 'https://codeyourfuture.io/' target="_blank" rel="noopener noreferrer">CodeYourFuture’s</a> (CYF) graduation day, I presented the final project to more than 100 people over Zoom. <br/>
                    I have also participated in Model United Nations, debating and extempore speech competitions.</ListElement> <br/>
                <ListElement><strong>Interpersonal skills:</strong> I contributed towards diverse and multicultural teamwork, group tasks and event organisation, which lead to the development of my interpersonal skills.
                    <br/>I enjoy collaborating on different projects. During the CYF course, I collaborated, as part of different teams, on various projects and tasks.
                </ListElement><br/>
            </ul>
            </Content>
            </Col>

        </StyledRow>    
        </Fade>        
        </Container>
    )
}





export default Skills;

const Heading = styled.h2`
  margin-top:10vh;
  margin-bottom: 5vh;
  text-align:center;
  letter-spacing: 2px;
`
const StyledRow = styled(Row) `
 display: block;
 
 @media (min-width:768px){
    display:flex; 
    font-size: 1em;
 }
`
const Content = styled.div`
    margin-top:5vh;
@media(min-width:768px){
    margin-top:19vh;
    margin-left:5rem;
}
`;

const ListElement = styled.li `
 text-align: left;
`;

const TechHeading= styled.h5 `
  margin-top:5vh;
`
const TechImg = styled(Image) `
 height:90px;
 width: 90px;
 margin:10px 0px 10px 10px;
`

const SkillsBox = styled.div `
  ${'' /* float:right;    */}
  margin-top: 2vh;
  margin-bottom: 5vh;
  display: flex;
  flex-wrap: wrap;
  ${'' /* justify-content:space-between; */}
`
