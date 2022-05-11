import React from "react";
import styled from "styled-components";
import andie from '../components/images/andie.png'
import sunlife from '../components/images/sunlifeLogo.png'

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
          Andie is a digital customer service tool that help businesses serve customers more efficiently and effectively. My position at the company was a Full Stack Software Developer.
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
          Sun Life Financial Inc. is a Canadian financial services company; it is primarily known as a life insurance company. I worked as a Big Data Software Developer working with many
          technologies/tools to create scripts, documentation and pipelines.
        </Paragraph>
        <Paragraph>
          My goal for this term wasn't anything too specific, I just wanted to expose myself to new tools and technologies. I didn't quite know what to expect from this role, in the end it 
          turned out to be a great learning opportunity. I was exposed to large company procedures when dealing with development on a large scale, an example being standard gitflow. I had 
          the opportunity to work with two seperate teams to create CI/CD pipelines using Jenkins, CDD, Ansible, artifrog, aws, etc. I was exposed to Docker, Docusaurus, Groovy, Adaptavist 
          scripting, etc by using these tools/technologies to automate and accomplish tasks to increase productivity. This term also exposed me to thourough documentation, projects I created
          and projects I didn't. This helped enhance my problem solving and investigative skills, alongside other software development skills. I was fortunate enough to work alongside another
          coop student from the University of Guelph, this allowed us to help one another when needed and also allowed us to cooperate on tasks at times.
        </Paragraph>
        <Paragraph>
          This term taught me a lot and exposed me to a variety of new tools/technologies, I liked cooperating with another coop student while working. One of the more useful tools I learned 
          about on this job was Docker, it allows the user to create containers of various softwares like an entirely different OS.
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