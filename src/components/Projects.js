import React from 'react';
import { Container, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import gradDirectory from '../assets/graduate-directory.png';
import projectDom from '../assets/project-dom.png';
import projectBlog from '../assets/project-blog.png';
import projectJournal from '../assets/project-journal.png';
import projectPortfolio from '../assets/portfolio-about.png';
import '../App.css';


function Projects(){  

    return (
        <Container fluid>
          <Heading>Projects</Heading>            
          <SubLine>Click on the image to see the project description</SubLine> 

          <ProjectsContainer>
           <Fade top>
          <Project>
            <StyledCard>
              <Card.Img variant="top" src={gradDirectory}/>
              <Card.Body>
                <Card.Title>CYF Graduate Directory</Card.Title>
                <Card.Text>
                <p>A platform to help CYF graduates connect with potential employers.
                Graduates can publicise their profiles and recruiters can contact them.</p>
                <p><strong>Tech Stack:</strong> React, Node.js, Oauth2, postgreSQL</p>
                </Card.Text>  
                <Card.Link href="https://dev-graduate-directory.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</Card.Link>
              <Card.Link href="https://github.com/OBakir90/cyf-final-project-pgsql-starter-kit/tree/develop" target="_blank" rel="noopener noreferrer">GitHub Repo</Card.Link> 
              </Card.Body>
            </StyledCard> 

          </Project>
          </Fade>
          <Fade bottom>
          <Project>
            <Card>
              <Card.Img variant="top" src={projectPortfolio}/>
              <br/>
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text >
                 <p>Portfolio website to showcase skills and projects.</p>
                 <br/>
                 <br/>
                 <br/>
                  <p><strong>Tech Stack:</strong> React, ReactBootstrap</p>
                </Card.Text>   
                <br/>                
                <Card.Link href="#">GitHub Repo</Card.Link>
                <Card.Link href="#">Demo</Card.Link> 
              </Card.Body>
            </Card>
            </Project>
            </Fade>

            <Fade top>  
            <Project>
            <Card >
              <Card.Img variant="top" src={projectDom}/>
              <br/>
              <Card.Body>
                <Card.Title>TV Shows Episode Guide</Card.Title>
                <Card.Text>
                <p>A TV shows episode guide using javascript DOM manupulation</p>
                <br/>
                <br/>
                <br/>
                <p><strong>Tech Stack:</strong> JavaScript, HTML, CSS, RESTful API</p>
                </Card.Text>   
                <Card.Link href="https://cyf-farhanafkhan-tv.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</Card.Link>
              <Card.Link href="https://github.com/FarhanaFKhan/tv-show-dom-project" target="_blank" rel="noopener noreferrer">GitHub Repo</Card.Link> 
              </Card.Body>
            </Card> 
            </Project>
            </Fade>

            <Fade bottom>
            <Project>
            <Card >
              <Card.Img variant="top" src={projectJournal}/>
              <br/>
              <Card.Body>
                <Card.Title>Landing Page</Card.Title>
                <Card.Text>
                <p>A landing page for an app for parents to keep track of their child's health and milestones</p>
                <br/>
                <br/>
                <p><strong>Tech Stack:</strong> HTML, CSS</p>
                </Card.Text>
                <br/>   
                <Card.Link href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/Project-journal/blob/master/index.html" target="_blank" rel="noopener noreferrer">Demo</Card.Link>
                <Card.Link href="https://github.com/FarhanaFKhan/Project-journal" target="_blank" rel="noopener noreferrer">GitHub Repo</Card.Link> 
              </Card.Body>
            </Card>
            </Project>
            </Fade>

            <Fade top>

            <Project>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={projectBlog}/>
              <br/>
              <Card.Body>
                <Card.Title>Landing Page- Blog</Card.Title>
                <Card.Text>
                <p>A landing page for a blog</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p><strong>Tech Stack:</strong> HTML, CSS</p>
                </Card.Text>   
                <Card.Link href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/html-css-project/blob/master/index.html" target="_blank" rel="noopener noreferrer">Demo</Card.Link>
              <Card.Link href="https://github.com/FarhanaFKhan/html-css-project" target="_blank" rel="noopener noreferrer">GitHub Repo</Card.Link> 
              </Card.Body>
            </Card>
            </Project>    
            </Fade>                     

          </ProjectsContainer>          
        </Container>
    )
}





export default Projects;

const Heading = styled.h2`
  margin-top: 10vh;
  margin-bottom: 5vh;
  text-align:center;
  letter-spacing: 2px;
`
const SubLine = styled.p `
  text-align:center;
`
const ProjectsContainer = styled.div `
  display:block;
  flex-direction: column;
  margin-top: 5vh;
 

  @media (min-width:768px){
    display:flex;
    flex-direction: row;  
    flex-wrap: wrap;
    justify-content: space-between; 
    margin-top: 10vh; 

  }
  
`
 const Project = styled.div `
  margin-top:5vh;
  &:hover{
    box-shadow: 10px 10px lightgrey;
    border: 1px solid black;
  }
`
const StyledCard = styled(Card) `
  @media(min-width:768px){
    width:18rem;
  }
`