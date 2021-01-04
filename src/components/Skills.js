import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
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

function Skills(){
    return (
        <Container>
        <Row>
            <Col>
            <Heading>My Skills</Heading>
            <Content>
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
            <Col>
            <TechHeading>Technical skills:</TechHeading>
            <SkillsBox>
                <TechImg class="img-fluid" src={html} alt="html logo"/>
                <TechImg class="img-fluid" src={css} alt="csslogo" />
                <TechImg class="img-fluid" src={js} alt="jS logo" />
                <TechImg class="img-fluid" src={bootstrap} alt="bootstrap logo" />
                <TechImg class="img-fluid" src={styledC} alt="styled components logo" />                
                <TechImg class="img-fluid" src={github} alt="github logo"  />
                
                <TechImg class="img-fluid" src={react} alt="react logo"/>
                <TechImg class="img-fluid" src={reactB} alt="reactBootstrap logo" />
                
                <TechImg class="img-fluid" src={node} alt="node logo" />
                <TechImg class="img-fluid" src={sql} alt="postgreSQL logo" />
                <TechImg class="img-fluid" src={git} alt="git logo" />
            </SkillsBox>

            </Col>
        </Row>            
        </Container>
    )
}





export default Skills;

const Heading = styled.h2`
  margin-bottom: 20px;
  text-align:center;
  letter-spacing: 2px;
`

const Content = styled.div`
padding-left: 50px;
`;

const ListElement = styled.li `
 text-align: left;
`;

const TechHeading= styled.h5 `
  margin-top:50px;
`
const TechImg = styled.img `
 height:90px;
 width: 90px;
 margin:10px 0px 10px 10px;
`

const SkillsBox = styled.div `
  float:right;   
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  ${'' /* justify-content:space-between; */}
`
