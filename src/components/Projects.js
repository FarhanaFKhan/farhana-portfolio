import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import gradDirectory from '../assets/graduate-directory.png';
import projectDom from '../assets/project-dom.png';
import projectBlog from '../assets/project-blog.png';
import projectJournal from '../assets/project-journal.png';
import '../App.css';


function Projects(){
    return (
        <Container fluid>
        <Heading>Projects</Heading>
            
          <p>Click on the image to see the project description</p>
          
          
          <div class="project-container">
            <div class="project-modal">
            {/* project directory */}
              <img class="img-fluid" src={gradDirectory} data-bs-toggle="modal" data-bs-target="#exampleModal" alt="project 1 screencap"/>
              <p><strong>CYF Graduate Directory</strong></p>              
        
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" style= { { "margin-top":"120px"} }>
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">CYF Graduate Directory</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h6>Summary</h6>
                    <div class="modal-summary">
                      <p>A platform to help CYF graduates connect with potential employers.Graduates can publicise their profiles and recruiters can contact them.</p>
                      <p><strong>Tech Stack:</strong> React, Node.js, Oauth2, postgreSQL</p>
                    </div>
                    
                    <di class="modal-links">
                      <a href="https://dev-graduate-directory.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><strong>Demo</strong></a>
                      <a href="https://github.com/OBakir90/cyf-final-project-pgsql-starter-kit/tree/develop" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
                    </di>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        
            </div>
            {/* <!-- project directory ending-->     */}
 

            <div class="project-modal">
            {/* <!--project journal--> */}
              <img class="img-fluid" src={projectJournal} data-bs-toggle="modal" data-bs-target="#journalProject" alt="project 3 screencap"/>
              <p><strong>Landing Page</strong></p>
              
        
            {/* <!-- Modal --> */}
            <div class="modal fade" id="journalProject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" style={{"margin-top":"120px"}}>
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Landing Page</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h6>Summary</h6>
                    <div class="modal-summary">
                      <p>A landing page for an app for parents to keep track of their child's health and milestones</p>
                      <p><strong>Tech Stack:</strong> HTML, CSS</p>
                    </div>
                    
                    <di class="modal-links">
                      <a href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/Project-journal/blob/master/index.html" target="_blank" rel="noopener noreferrer" ><strong>Demo</strong></a>
                      <a href="https://github.com/FarhanaFKhan/Project-journal" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
                    </di>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        
            </div>
            {/* <!-- project journal ending-->     */}

            <div class="project-modal" >
            {/* <!--project Tvmaze--> */}
              <img class="img-fluid" src={projectDom} data-bs-toggle="modal" data-bs-target="#domProject" alt="project 2 screencap"/>
              <p><strong>TV Shows Episode Guide</strong></p>
              
        
            {/* <!-- Modal --> */}
            <div class="modal fade" id="domProject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" style={{"margin-top":"120px"}}>
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">TV Guide</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h6>Summary</h6>
                    <div class="modal-summary">
                      <p>A TV shows episode guide using javascript DOM manupulation</p>
                      <p><strong>Tech Stack:</strong> JavaScript, HTML, CSS</p>
                    </div>
                    
                    <di class="modal-links">
                      <a href="https://cyf-farhanafkhan-tv.netlify.app/" target="_blank" rel="noopener noreferrer"><strong>Demo</strong></a>
                      <a href="https://github.com/FarhanaFKhan/tv-show-dom-project" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
                    </di>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        
            </div>
            {/* <!-- project TVmaze ending--> */}

            <div class="project-modal">
            {/* <!--blog landing page--> */}
              <img class="img-fluid" src={projectBlog} data-bs-toggle="modal" data-bs-target="#projectBlog" alt="project 1 screencap"/>
              <p><strong>Landing Page-Blog</strong></p>
              
        
            {/* <!-- Modal --> */}
            <div class="modal fade" id="projectBlog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" style={{"margin-top":"120px"}}>
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Landing Page- Blog</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h6>Summary</h6>
                    <div class="modal-summary">
                      <p>A landing page for a blog</p>
                      <p><strong>Tech Stack:</strong> HTML, CSS</p>
                    </div>
                    
                    <di class="modal-links">
                      <a href="https://htmlpreview.github.io/?https://github.com/FarhanaFKhan/html-css-project/blob/master/index.html" target="_blank" rel="noopener noreferrer"><strong>Demo</strong></a>
                      <a href="https://github.com/FarhanaFKhan/html-css-project" target="_blank" rel="noopener noreferrer"><strong>GitHub Repo</strong></a>
                    </di>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        
            </div>
            {/* <!-- blog project ending-->     */}
          </div>
            
        </Container>
    )
}





export default Projects;

const Heading = styled.h2`
  margin-bottom: 20px;
  text-align:center;
  letter-spacing: 2px;
`