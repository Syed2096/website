import React from "react";
import styled from "styled-components";

function Experience() {
  return (
    <Background>
      {/* <Skill>
          <SkillTitle>
          <div>
              <h2>Hello</h2>
            </div>
            <h3 style={{color: 'white'}}>Python</h3>
            <p>I have created several projects in Python, I would consider myself pretty experienced with python. It is one of my favourite languages.</p>
          </SkillTitle>
        </Skill>
        <Skill>
          <SkillTitle>
          <div>
              <h2>Hello</h2>
            </div>
            <h3 style={{color: 'white'}}>Django</h3>
            <p>Django is a framework for Python, it is used to create backend web applications. I have some experience with this framework, however it feels natural to me.</p>
          </SkillTitle>
        </Skill>
        <Skill>
          <SkillTitle>
          <div>
              <h2>Hello</h2>
            </div>
            <h3 style={{color: 'white'}}>React/JavaScript</h3>
            <p>React is a framework for JavaScript created by facebook for front end development. It is what I am using to create this website.</p>
          </SkillTitle>
        </Skill>
      <Skill>
          <SkillTitle>
          <div>
              <h2>Hello</h2>
            </div>
            <h3 style={{color: 'white'}}>C</h3>
            <p>C is the primary language used at the University of Guelph, it is a hard language to master. However, my time with the language allowed me to perfect it.</p>
          </SkillTitle>
        </Skill>
        <Skill>
          <SkillTitle>
          <div>
              <h2>Hello</h2>
            </div>
            <h3 style={{color: 'white'}}>Java</h3>
            <p>Java was the first programming language I learned, it has been some time but I know I could relearn this language overnight.</p>
          </SkillTitle>
        </Skill>
        <Skill>
          <SkillTitle>
            <div>
              <h2>Hello</h2>
            </div>
            <h3 style={{color: 'white'}}>Tensorflow</h3>
            <p>Tensorflow is library created by Google to help create advanced AI projects. Like predicting the stock/crypto market...</p>
          </SkillTitle>
        </Skill>  */}
    </Background>
  );
}

export default Experience;

const Background = styled.div`
  background-color: black;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 85%;
`;

// const Skill = styled.div`
//   padding: 1rem;
//   color: white;
//   cursor: pointer;
//   left: 50%;
// `;

// const SkillTitle = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0.5rem;
//   margin-bottom: 0.5rem;
//   color: white;
// `;