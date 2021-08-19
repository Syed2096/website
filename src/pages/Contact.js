import React from "react";
import styled from "styled-components";
import email from '../components/images/email.png'
import github from '../components/images/github.png';
import linkedin from '../components/images/linkedin.png';

function Contact() {
  return (
    <Background>
      <Skill href='https://www.linkedin.com/in/ahmed-syed-0b361a178/' target="_blank">
          <SkillTitle>
            <Image>
              <Icon src={linkedin}></Icon>
            </Image>
            <Title>linkedin</Title>
          </SkillTitle>
          <Paragraph>
          Ahmed Syed
        </Paragraph>
      </Skill>
      <Skill href='https://github.com/Syed2096' target="_blank">
          <SkillTitle>
            <Image>
              <Icon src={github}></Icon>
            </Image>
            <Title>Github</Title>
          </SkillTitle>
          <Paragraph>
          Syed2096
        </Paragraph>
      </Skill>
      <Skill>
          <SkillTitle>
            <Image>
              <Icon src={email}></Icon>
            </Image>
            <Title>Email</Title>
          </SkillTitle>
          <Paragraph>
          amdsyd2000@gmail.com
        </Paragraph>
      </Skill>      
    </Background>
  );
}

export default Contact;

const Background = styled.div`
  background-color: black;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 85%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem; 
  @media screen and (max-width: 968px) {
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    grid-template-columns: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-gap: 1rem;
    padding: 1rem 80px;
    font-size: 1.2rem; 
    overflow: auto;
  }
`;


const Skill = styled.a`
  padding: 1rem;
  cursor: pointer;
  left: 50%;
  margin-top: 5rem;
  background: black;
  &:hover {
    background-color: white;
    color: black;
    border-radius: 10rem;
  }
`;

const Paragraph = styled.a`
  width: 75%;
  color: white;
  ${Skill}:hover & {
    background-color: white;
    color: black;
    border-radius: 10rem;
  }
`;

const Title = styled.h3`
  color: white;
  margin-top: 10px;
  ${Skill}:hover & {
    background-color: white;
    color: black;
    border-radius: 10rem;
  }
`;

const SkillTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 60px;
`;
