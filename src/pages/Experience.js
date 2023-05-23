import React from "react";
import styled from "styled-components";
import andie from '../components/images/andie.png'
import sunlife from '../components/images/sunlifeLogo.png'
import blackberry from '../components/images/blackberry.png'

function Experience() {
  return (
    <Background>
      <Skill>
          <SkillTitle>
            <Image>
              <Icon src={andie}></Icon>
            </Image>
            <h3 style={{color: 'white', marginTop: '10px'}}>SmoothAI Inc/Andie</h3>
          </SkillTitle>
          <Paragraph>
          Andie is a digital customer service tool that help businesses serve customers more efficiently and effectively. 
        </Paragraph>
        <Paragraph>
          My job as a Full Stack Software Developer required me to learn about different front end and backend technologies, and how to communicate between the two. The most interesting part of my job
          was creating text features. These features connected with the backend in order to allow users to accomplish tasks from text.
        </Paragraph>
      </Skill>
      <Skill style={{marginTop: '-20px'}}>
          <SkillTitle>
            <Image>
              <Icon src={sunlife}></Icon>
            </Image>
            <h3 style={{color: 'white', marginTop: '10px'}}>Sun Life Financial</h3>
          </SkillTitle>
          <Paragraph>
          Sun Life Financial Inc. is a Canadian financial services company; it is primarily known as a life insurance company.
        </Paragraph>
        <Paragraph>
          This term taught me a lot and exposed me to a variety of new tools/technologies, I liked cooperating with another coop student while working. One of the more useful tools I learned 
          about on this job was Docker, it allows the user to create containers of various software.
        </Paragraph>
      </Skill>
      <Skill style={{marginTop: '-20px'}}>
          <SkillTitle>
            <Image>
              <Icon src={blackberry}></Icon>
            </Image>
            <h3 style={{color: 'white', marginTop: '10px'}}>BlackBerry</h3>
          </SkillTitle>
          <Paragraph>
          BlackBerry Limited is an international business serving thousands of enterprise customers. They provide software and services for cybersecurity, 
          endpoint management, embedded systems, software-defined vehicles, critical event management, and secure communications.
        </Paragraph>
        <Paragraph>
          I worked mainly in C, using software such as subversion and jenkins. I worked on Crypto-C, SSL-C and PKI-C. I would ensure that builds were working as intended and fix them when neccessary.
        </Paragraph>
      </Skill>
    </Background>
  );
}

export default Experience;

const Paragraph = styled.p`
  color: white;
  width: 75%;
  margin-left: 50%;
  text-align: center;
  transform: translate(-50%)
`;

const Background = styled.div`
  background-color: black;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 85%;
  font-size: 1rem;
`;

const Skill = styled.div`
  padding: 1rem;
  color: white;
  cursor: pointer;
  left: 50%;
  margin-top: 5rem;
`;

const SkillTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: white;
`;


const Image = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 100px;
  border-radius: 100px;
`;