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
            <Title>linkedin - Ahmed Syed</Title>
          </SkillTitle>
      </Skill>
      <Skill href='https://github.com/Syed2096' target="_blank">
          <SkillTitle>
            <Image>
              <Icon src={github}></Icon>
            </Image>
            <Title>Github - Syed2096</Title>
          </SkillTitle>
      </Skill>
      <Skill>
          <SkillTitle>
            <Image>
              <Icon src={email}></Icon>
            </Image>
            <Title>Email - amdsyd2000@gmail.com</Title>
          </SkillTitle>
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
  padding: 1rem 10px;
  font-size: 1.2rem; 
  @media screen and (max-width: 968px) {
    display: grid;
    grid-template-columns: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.7rem; 
    overflow: auto;
    margin-top: 4rem;
  }
`;


const Skill = styled.a`
  cursor: pointer;
  left: 50%;
  background: black;
  &:hover {
    background-color: white;
    color: black;
    border-radius: 10rem;
  }
  @media screen and (max-width: 968px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem; 
    overflow: auto;
    margin-top: 1rem;
  }
`;

const Title = styled.h3`
  color: white;
  ${Skill}:hover & {
    background-color: white;
    color: black;
    border-radius: 100%;
  }
`;

const SkillTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
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
  @media screen and (max-width: 968px) {
    width: 70px;
    height: 70px;
  }
`;

const Icon = styled.img`
  width: 60px;
  @media screen and (max-width: 968px) {
    width: 40px;
  }
`;
