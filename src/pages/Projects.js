import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <Background>
      <Container>
      <Skill2 href="/cryptoBot">
          <SkillTitle>
            <Bot>CryptoBot <h6 style={{color: "white"}}>Click Me!</h6></Bot>
          </SkillTitle>
          <p>This was a python project that predicted the price of cryptocurrencies using machine learning and neural networks, libraries such as tensorflow, matplotlib and discord were used.</p>
        </Skill2>
        <Skill>
          <SkillTitle>
            <h3 style={{color: 'white'}}>Dungeons and Dragons Generator</h3>
          </SkillTitle>
          <p>This Java application generated a dungeons and dragons map, with visual images to display each generation. Each dungeon was generated randomly.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <h3 style={{color: 'white'}}>Full Stack Web Application with C Backend</h3>
          </SkillTitle>
          <p>Using JavaScript and C, I was able to create a web application for VCard files. The application allowed users to create, edit and delete VCards. The application also displayed the VCards.</p>
        </Skill>
      <Skill>
          <SkillTitle>
            <h3 style={{color: 'white'}}>IMDB Database Reader</h3>
          </SkillTitle>
          <p>Parsed through thousands of records using arrays, linked lists and trees to display required information from IMDB database.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <h3 style={{color: 'white'}}>Colour Sorting Machine</h3>
          </SkillTitle>
          <p>This project used an Arduino and colour sensor to sort smarties based on colour, using motors.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <h3 style={{color: 'white'}}>PengWin</h3>
          </SkillTitle>
          <p>PengWin was an android application that was created in order to replicate games like subway surfer or temple run, it was a hit.</p>
        </Skill> 
        </Container> 
    </Background>
  );
}

export default Projects;

const Background = styled.div`
  background-color: black;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 85%;
`;

const Skill2 = styled.a`
  color: white;
  background-color: black;
  border-radius: 10rem;
  &:hover {
    background-color: white;
    color: black;
    border-radius: 10rem;
  }
`;

const Bot = styled.h3`
  color: white;
  ${Skill2}:hover & {
    background-color: white;
    color: black;
    border-radius: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem; 
  margin-top: 13vh;
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
    margin-top: 13vh;
  }
`;

const Skill = styled.div`
  padding: 1rem;
  color: white;
  cursor: pointer;
`;

const SkillTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: white;
`;