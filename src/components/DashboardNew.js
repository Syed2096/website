import React from "react";
import photo from './images/1578609255371.jpg'
import Typical from 'react-typical';
import styled from "styled-components";

function DashboardNew() {
    return (
      <Background>   
          <Icon src={photo} alt='Temp' width='200vw' height='200vh'/>
          <Text>
                {' '}
                <Typical 
                    loop={Infinity} 
                    wrapper='b'
                    steps={[
                    'I am a developer',
                    5000,
                    'I am a problem solver',
                    5000,
                    'I am a team player',
                    5000,
                    'I am a designer',
                    5000,
                    'I am a continuous learner',
                    5000,
                    'I am a creative thinker',
                    5000,
                    'I am passionate about technology',
                    5000,
                    'I am a hard worker',
                    5000,
                    'I am observant',
                    3000,
                    ]}
                />
            </Text>
      </Background>
    );
  }
  
  export default DashboardNew;

  const Text = styled.h2`
  color: white;
  text-align: center;
  font-family: Arial;
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const Background = styled.div`
  background-color: black;
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 0.85;
`;

const Icon = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  display: block;
  margin: 0 auto;
  margin-top: 10rem;
  width: 200px;
  height: 200px;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    width: 150px;
    height: 150px;
  }
`;
