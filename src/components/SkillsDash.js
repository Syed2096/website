import React from "react";
import styled from 'styled-components';
import python from './images/python.png'
import django from './images/django.png';
import react from './images/logo512.png';
import c from './images/c.png';
import java from './images/java.png';
import tensorflow from './images/tensorflow.png'
import flask from './images/flask.jpg'
import cloud from './images/cloud.png'
import docker from './images/docker.png'
import jenkins from './images/jenkins.jpg'
import arduino from './images/arduino.png'
import jira from './images/jira.png'
import maven from './images/maven.png'
import git from './images/git.png'
import unity from './images/unity.jpg'
import ansible from './images/ansible.png'
import sonar from './images/sonar.png'
import os from './images/os.png'

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
          <p>I have extensive python experience, it is very versatile and my favorite language.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={django}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Django</h3>
          </SkillTitle>
          <p>Powerful web development framework, I have used in my previous coop and for personal projects.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={flask}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Flask</h3>
          </SkillTitle>
          <p>Flask is also a web development framework but more lightweight, useful for building simple APIs.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={react}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>React/JavaScript</h3>
          </SkillTitle>
          <p>React is a framework for JavaScript created by facebook for dynamic and interactive user interfaces. It is what I am using to create this website.</p>
        </Skill>
      <Skill>
          <SkillTitle>
            <Image>
              <Icon src={c}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>C/C++</h3>
          </SkillTitle>
          <p>C is the primary language used at the University of Guelph, I have used it for low level projects and when requiring performance.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={java}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Java</h3>
          </SkillTitle>
          <p>Java was one of the first languages I learned, helping me understand how to create scalable software solutions.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={tensorflow}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Tensorflow</h3>
          </SkillTitle>
          <p>Tensorflow is library created by Google to help create advanced AI projects. I created a bot that tried predicting investment trends using this library.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={cloud}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>AWS/GCP/Azure</h3>
          </SkillTitle>
          <p>Worked with buckets, virtual machines, etc using the main cloud platforms.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={docker}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Docker</h3>
          </SkillTitle>
          <p>Used to seperate applications using containers for efficiency.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={arduino}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Arduino</h3>
          </SkillTitle>
          <p>Interactive prototypes and IoT solutions.</p>
        </Skill>
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={jenkins}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Jenkins & CI/CD</h3>
          </SkillTitle>
          <p>Efficient continuous integration and delivery.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={jira}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Jira</h3>
          </SkillTitle>
          <p>Agile project management.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={maven}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Maven</h3>
          </SkillTitle>
          <p>Dependency management and build automation.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={git}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Git/Subversion</h3>
          </SkillTitle>
          <p>Version control systems.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={unity}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Unity/C#</h3>
          </SkillTitle>
          <p>Game development using C#.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={ansible}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Ansible</h3>
          </SkillTitle>
          <p>IT Automation</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={sonar}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>SonarQube</h3>
          </SkillTitle>
          <p>Code quality analysis.</p>
        </Skill> 
        <Skill>
          <SkillTitle>
            <Image>
              <Icon src={os}></Icon>
            </Image>
            <h3 style={{color: 'white'}}>Operating Systems</h3>
          </SkillTitle>
          <p>I have varied experience using and developing for IOS, Android, Windows, Linux and MacOS. </p>
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
  align-content: flex-start; /* Align rows from the top */
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem; 
  margin-top: 13vh;
  @media screen and (max-width: 968px) {
    display: grid;
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