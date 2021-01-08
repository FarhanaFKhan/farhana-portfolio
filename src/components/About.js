import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import profile from '../assets/profile-picture.jpeg';



function About(){
    return (
        <div>
            <Container>
            <Fade top>
                <StyledRow>
                    <Col><Heading>About Me</Heading>
                    <div>

                       <p> A confident, social-media savvy and business-minded individual, I relish any opportunity to
                        talk about and promote what I’m passionate about, either through microblogging or public speaking.
                        As a graduate of <a href="https://codeyourfuture.io/" target="_blank" rel="noopener noreferrer">CodeYourFuture</a>’s Full Stack Web Development programme,and following on
                        from a wealth of experience in business and communications, I have a skill-set ranging from
                        front-end frameworks like <strong>React</strong> and <strong>Bootstrap</strong>, back-end technologies like <strong>Node.js</strong> to database
                        management in <strong>postgreSQL</strong>. I’m seeking a position in a fast-paced environment where I can put
                        my web development skills to use and keep learning every day.</p>
                        <p>Recently I completed a full stack web development course with CYF. An opportunity I am glad I availed. 
                        This course not only improved my coding skills but refined my soft skills such as<strong> time management, collaboration and working remotely.</strong><br/>
                        Through <strong>microblogging</strong>, I like to share my experiences and create awareness regarding topics I am passionate about such as pre-eclampsia, premature babies, women empowerment and women in tech.
                        I love to <strong>read</strong> in my spare time.</p>
                    </div>
                    </Col>
                    <Col><ProfilePicture src={profile}  alt="farhana's profile" fluid/>
                    </Col>
                </StyledRow>
                </Fade>
  
            </Container>
        </div>
    )
}





export default About;

const Heading = styled.h2 `
  margin-top: 10vh;
  margin-bottom: 5vh;
  text-align:center;
  letter-spacing: 2px;
`
const StyledRow = styled(Row) `
    display: block;
    margin-left:2rem;
    @media (min-width:769px){
        display:flex;
        font-size: 1em;
    }
    
`

const ProfilePicture = styled(Image) `
    margin-top:10rem;
    ${'' /* height:25rem; */}
@media (min-width:767px){
    margin-left: 10rem;
    margin-top: 5rem;
    height:20rem;

}
@media (min-width:1000px){
    height:25rem;
    margin-top:10rem;
}
`