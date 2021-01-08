import { React, useState} from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import gradDirectory from '../assets/graduate-directory.png';
import projectDom from '../assets/project-dom.png';
import projectBlog from '../assets/project-blog.png';
import projectJournal from '../assets/project-journal.png';
import '../App.css';


function Projects(){

  const [show, setShow] = useState("modal-one"|"modal-two"|"modal-three"|"modal-four"|"close");
  const handleClose = () =>setShow("close");

  function handleShowModalOne() {
    setShow("modal-one");
  }
  function handleShowModalTwo() {
    setShow("modal-two");
  }
  function handleShowModalThree() {
    setShow("modal-three");
  }
  function handleShowModalFour() {
    setShow("modal-four");
  }
  

    return (
        <Container fluid>
          <Heading>Projects</Heading>            
          <SubLine>Click on the image to see the project description</SubLine>          

          <ProjectsContainer>
          <Project>
          <ProjectImg class="img-fluid" src={gradDirectory} onClick={handleShowModalOne} alt="CYF Graduate directory Screencap"/>
          <ProjectCYF>CYF Graduate Directory</ProjectCYF> 
          </Project>
          <Modal
          show={show === "modal-one"}
          onHide={handleClose}
          keyboard={true}
          >
          <Modal.Header closeButton>
          <Modal.Title>CYF Graduate Directory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h6>Summary</h6>
          <p>A platform to help CYF graduates connect with potential employers.Graduates can publicise their profiles and recruiters can contact them.</p>
          <p><strong>Tech Stack:</strong> React, Node.js, Oauth2, postgreSQL</p>
          <div class="modal-links">
            <a href="https://dev-graduate-directory.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><strong>Demo</strong></a>
            <a href="https://github.com/OBakir90/cyf-final-project-pgsql-starter-kit/tree/develop" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
          </Modal>

          <Project>
          <ProjectImg class="img-fluid" src={projectJournal} onClick={handleShowModalTwo} alt="Landing page of a digital journal Screencap"/>
          <ProjectJournal>Landing Page of a Digital Journal</ProjectJournal> 
          </Project>

          <Modal
          show={show === "modal-two"}
          onHide={handleClose}
          keyboard={true}
          >
          <Modal.Header closeButton>
          <Modal.Title>Landing Page of a Digital Journal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h6>Summary</h6>
          <div class="modal-summary">
          <p>A landing page for an app for parents to keep track of their child's health and milestones</p>
          <p><strong>Tech Stack:</strong> HTML, CSS</p>
          </div>
                    
          <div class="modal-links">
          <a href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/Project-journal/blob/master/index.html" target="_blank" rel="noopener noreferrer" ><strong>Demo</strong></a>
          <a href="https://github.com/FarhanaFKhan/Project-journal" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
          </Modal>

          <Project>                   
          <ProjectImg class="img-fluid" src={projectDom} onClick={handleShowModalThree} alt="TV episode guide project screencap" />
          <ProjectDom>TV Shows Episode Guide</ProjectDom> 
          </Project>

          <Modal
          show={show === "modal-three"}
          onHide={handleClose}
          keyboard={true}
          >
          <Modal.Header closeButton>
          <Modal.Title>TV Shows Episode Guide</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h6>Summary</h6>    
          <p>A TV shows episode guide using javascript DOM manupulation</p>
          <p><strong>Tech Stack:</strong> JavaScript, HTML, CSS</p>    
          <div className="modal-links">
          <a href="https://cyf-farhanafkhan-tv.netlify.app/" target="_blank" rel="noopener noreferrer"><strong>Demo</strong></a>
          <a href="https://github.com/FarhanaFKhan/tv-show-dom-project" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
          </Modal>

          <Project>
          <ProjectImg class="img-fluid" src={projectBlog} onClick={handleShowModalFour} alt="Landing Page of a Blog"/>
          <ProjectBlog>Landing Page-Blog</ProjectBlog> 
          </Project>

          <Modal
          show={show === "modal-four"}
          onHide={handleClose}
          keyboard={true}
          >
          <Modal.Header closeButton>
          <Modal.Title>Landing Page-Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h6>Summary</h6>    
          <p>A landing page for a blog</p>
          <p><strong>Tech Stack:</strong> HTML, CSS</p>
          <div class="modal-links">
          <a href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/html-css-project/blob/master/index.html" target="_blank" rel="noopener noreferrer"><strong>Demo</strong></a>
          <a href="https://github.com/FarhanaFKhan/html-css-project" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
          </Modal>  
          </ProjectsContainer>          
        </Container>
    )
}





export default Projects;

const Heading = styled.h2`
  margin-bottom: 20px;
  text-align:center;
  letter-spacing: 2px;
`
const SubLine = styled.p `
  text-align:center;
`
const ProjectsContainer = styled.div `
  display:flex;
  margin-top: 110px;
  justify-content: space-around;

  @media (max-width:768px){
    flex-direction: column;
    margin-left:75px;
  }
  
`
const Project = styled.div `
 margin-left:5px;
 
`
const ProjectImg = styled.img `
 height: 80%;
 width: 80%;
 
 &:hover{
  box-shadow: 10px 10px lightgrey;
  border: 1px solid black;
 }

`

const ProjectCYF = styled.p `
  margin-left:17px;
  text-decoration: underline purple;
`
const ProjectJournal = styled.p `
  ${'' /* margin-left:10px; */}
  text-decoration: underline purple;
`
const ProjectDom = styled.p `
  margin-left:20px;
  text-decoration: underline purple;
`
const ProjectBlog = styled.p `
  margin-left: 35px;
  text-decoration: underline purple;
`