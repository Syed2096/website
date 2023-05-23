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
      <div style={{...styles.card}}>
        <h1 style={{...styles.main}} >About Me</h1>
        <p style={{...styles.paragraph}}>
        Hello, my name is Ahmed! I'm a passionate software engineer with a deep-rooted love for solving complex problems 
        and crafting innovative solutions. As a computer science graduate, I've honed my skills in various topics from data structures and algorithms 
        to compilers. What sets me apart is my unwavering curiosity and eagerness to learn, which drive me to stay 
        updated with the latest technologies and industry trends. I thrive in collaborative environments, where my strong teamwork 
        and communication skills foster creativity and seamless cooperation. My portfolio showcases a range of projects where I've 
        leveraged agile methodologies and my attention to detail to deliver exceptional results. I invite you to ask me questions 
        to delve deeper into my experiences and discover how I can contribute to your team!
        </p>
        <img style={{...styles.logo}} src={logo} alt='Temp' width='200vw' height='200vh'/>
        <h1 style={{...styles.paragraph, marginTop: "23rem"}} >Notable Courses</h1>
        <ul style={{...styles.courses, marginTop: "9rem"}}>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
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
  paragraph: {
    color: 'white',
    position: 'absolute',
    marginLeft: '50%',
    top: '10rem',
    transform: 'translate(-50%,-50%)',
    fontFamily: 'Arial',
    zIndex: -1,
    // height: '100%'
    width: '60%',
    'text-align': 'center'
  },
  courses: {
    color: 'white',
    position: 'absolute',
    listStyleType: 'none',
    left: '50%',
    top: '38rem',
    transform: 'translate(-50%,-50%)',
    fontFamily: 'Arial',
    zIndex: -1,
    // height: '100%'
    width: '40rem',
    'text-align': 'center'
  },
  card: {
    marginTop: '5rem',
    height: '90vh',
    width: '100%',
    // background: '',
    position: 'absolute',
    zIndex: -1,
    opacity: 1
  },
  logo: {
    position: 'absolute',
    left: '50%',
    top: '15rem',
    transform: 'translate(-50%,0%)',
    borderRadius: '100%',
    borderStyle: 'solid',
    borderColor: 'white'
  },
  background: {
    'background-color': 'black',
    position: 'fixed',
    color: 'white',
    width: '100%',
    height: '100vh',
    opacity: '85%',
    zIndex: -2,
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
