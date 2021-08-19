import React from "react";
import styled from "styled-components";
import photo from '../components/images/andie.png'

function Experience() {
  return (
    <Background>
      <Skill>
          <SkillTitle>
            <Image>
              <Icon src={photo}></Icon>
            </Image>
            <h3 style={{color: 'white', marginTop: '10px'}}>SmoothAI Inc/Andie</h3>
          </SkillTitle>
          <Paragraph>
          Andie is a digital customer service tool that help businesses serve customers more efficiently and effectively. My position at the company was a full stack developer.
          I worked with several web development technologies.   
        </Paragraph>
        <Paragraph>
          My main goal for the term was to learn web development, from frontend to backend. At the time I didn't even know what knowledge it required to build a web application.
          This job was perfect to achieve this goal since a Full Stack Developer learns all the required skills for web development. 
          I learned React.js, some other libraries for the framework, Django, Twilio, Flask, etc. I didn't really know any HTML CSS before this, but this job allowed me to learn those too.
          As the job went on the only goal I had was to finish the task given to me, using whatever I could to complete the task. Another goal I had was to understand the codebase for Andie,
          it was the first time I was introduced to a large scale project and it was quite overwhelming at the start. However, now I can confidently say I understand most of what Andie does, 
          if not most basically everything. Luckily, I was able to learn what I wanted, complete my tasks and understand the company as a whole.
        </Paragraph>
        <Paragraph>
          My job as a Full Stack developer required me to learn about different front end and backend technologies, and how to communicate between the two. The most interesting part of my job
          was creating text features. These features connected with the backend in order to allow users to accomplish tasks from text.
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