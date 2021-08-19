import React from "react";
import logo from '../components/images/guelphLogo.jpg';
import styled from "styled-components";

function About() {
  return (
    <Background>
      <div style={{...styles.card}}>
        <h1 style={{...styles.main}} >About Me</h1>
        <p style={{...styles.paragraph}}>
          I am Ahmed Syed, a student at the University of Guelph. I am pursuing a Bachelor's degree in Computer Science.
          This website was created in order to demonstrate my web development skills, to attract recruiters and to complete COOP work term reports at
          the Univeristy of Guelph.
        </p>
      </div>
      <img style={{...styles.logo}} src={logo} alt='Temp' width='200vw' height='200vh'/>
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
    'font-family': 'Arial',
    fontFamily: 'Arial',
    zIndex: -1
  },
  paragraph: {
    color: 'white',
    position: 'absolute',
    left: '50%',
    top: '10rem',
    transform: 'translate(-50%,-50%)',
    'font-family': 'Arial',
    fontFamily: 'Arial',
    zIndex: -1,
    // height: '100%'
    width: '20rem',
    'text-align': 'center'
  },
  card: {
    marginTop: '10vh',
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
    top: '30rem',
    transform: 'translate(-50%,-50%)',
    borderRadius: '100rem'
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
