import React from "react";
import logo from '../components/images/guelphLogo.jpg';
import styled from "styled-components";

function About() {
  const courses = [
    "Data Structures",
    "Algorithms",
    "Object Oriented Programming",
    "Discrete Structures",
    "Statistics",
    "Microcomputers",
    "Software Development and Integration",
    "Operating Systems",
    "Systems Analysis and Design",
    "Theory of Computation",
    "Computer Networks",
    "Cloud Computing",
    "Data Bases",
    "Software Reliability and Testing",
    "Image Processing and Vision",
    "Digital Systems",
    // Add more courses here
  ];

  return (
    <Background>
    <div style={styles.card}>
      <h1 style={styles.main}>About Me</h1>
      <Paragraph>
        Hello, my name is Ahmed! I'm a passionate software engineer with a deep-rooted love for solving complex problems 
        and crafting innovative solutions. As a computer science graduate, I've honed my skills in various topics from data structures and algorithms 
        to compilers. What sets me apart is my unwavering curiosity and eagerness to learn, which drive me to stay 
        updated with the latest technologies and industry trends. I thrive in collaborative environments, where my strong teamwork 
        and communication skills foster creativity and seamless cooperation. My portfolio showcases a range of projects where I've 
        leveraged agile methodologies and my attention to detail to deliver exceptional results. I invite you to ask me questions 
        to delve deeper into my experiences and discover how I can contribute to your team!
      </Paragraph>
      <Paragraph>
        <Image src={logo} />
      </Paragraph>
      <Paragraph>
        <Header>Notable Courses</Header>
      </Paragraph>
      <Paragraph>
        <Ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </Ul>
      </Paragraph>
    </div>
  </Background>
  
  );
}

export default About;

const styles = {
  main: {
    // marginLeft: '7vw',
    color: 'white',
    position: 'absolute',
    left: '50%',
    top: '4rem',
    transform: 'translate(-50%,-50%)',
    fontFamily: 'Arial',
    zIndex: -1
  },
  courses: {
    color: 'white',
    position: 'absolute',
    listStyleType: 'none',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontFamily: 'Arial',
    zIndex: -1,
    // height: '100%'
    width: '40rem',
    'text-align': 'center'
  },
  card: {
    marginTop: '5rem',
    height: '90%',
    width: '100%',
    // background: '',
    position: 'absolute',
    zIndex: -1,
    opacity: 1
  },
};

const Background = styled.div`
  background-color: black;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 85%;
`;

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-top: 25rem;
  color: white;
  font-family: arial;
`;

const Image = styled.img`
  left: 50%;
  position: absolute;
  border-radius: 100%;
  height: 20vh;
  width: 20vh;
  transform: translate(-50%)
`;

const Paragraph = styled.p`
  color: white;
  width: 75%;
  margin-left: 50%;
  margin-top: 6rem;
  text-align: center;
  transform: translate(-50%)
`;

const Ul = styled.ul`
  color: white;
  width: 75%;
  margin-left: 50%;
  margin-top: -6rem;
  text-align: center;
  transform: translate(-50%);
  list-style-type: none;
`;

