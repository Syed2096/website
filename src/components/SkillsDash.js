import React from "react";
import styled from 'styled-components';
import python from './images/python.png'
import django from './images/django.png';
import react from './images/logo512.png';
import c from './images/c.png';
import java from './images/java.png';
import tensorflow from './images/tensorflow.png'

function SkillsDash() {
  return (
    <>
      <Container>
      <Skill>
          <SkillTitle>
            <Image>
              <Icon src={python}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Python</h3>
          </SkillTitle>
          <p>I have created several projects in Python, I would consider myself pretty experienced with python. It is one of my favourite languages.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={django}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Django</h3>
          </SkillTitle>
          <p>Django is a framework for Python, it is used to create backend web applications. I have some experience with this framework, however it feels natural to me.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={react}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>React/JavaScript</h3>
          </SkillTitle>
          <p>React is a framework for JavaScript created by facebook for front end development. It is what I am using to create this website.</p>
        </Skill>
      <Skill>
          <SkillTitle>
            <Image>
              <Icon src={c}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>C</h3>
          </SkillTitle>
          <p>C is the primary language used at the University of Guelph, it is a hard language to master. However, my time with the language allowed me to perfect it.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={java}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Java</h3>
          </SkillTitle>
          <p>Java was the first programming language I learned, it has been some time but I know I could relearn this language overnight.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={tensorflow}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Tensorflow</h3>
          </SkillTitle>
          <p>Tensorflow is library created by Google to help create advanced AI projects. Like predicting the stock/crypto market...</p>
        </Skill> 
        </Container> 
    </>
  );
}

export default SkillsDash;

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
  width: 50px;
`;