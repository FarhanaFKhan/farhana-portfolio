import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import profile from '../assets/profile-picture.jpeg';



function About(){
    return (
        <div>
            <Container>
                <Row>
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
                    <Col><ProfilePicture src={profile}  alt="farhana's profile"/>
                    {/* <img  src={profile}  alt="farhana's profile"/> */}
                    </Col>
                </Row>
  
            </Container>
        </div>
    )
}





export default About;

const Heading = styled.h2`
  margin-bottom: 20px;
  text-align:center;
  letter-spacing: 2px;
`

const ProfilePicture = styled.img `
margin-top:55px;
${'' /* margin-left: 100px; */}
float:right;
height:430px;
`