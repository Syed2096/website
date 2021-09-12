import React from "react";
import photo from './images/1578609255371.jpg'
import Typical from 'react-typical';
import styled from "styled-components";

function DashboardNew() {
    return (
      <Background>   
          <Icon src={photo} alt='Temp' width='200vw' height='200vh'/>
          <Text>
                I am a{' '}
                <Typical 
                    loop={Infinity} 
                    wrapper='b'
                    steps={[
                    'student',
                    2000,
                    'designer',
                    2000,
                    'developer',
                    2000,
                    'teammate',
                    2000,
                    'scientist',
                    2000,
                    ]}
                />
            </Text>
      </Background>
    );
  }
  
  export default DashboardNew;

  const Text = styled.h2`
    color: white;
    position: absolute;
    left: 50%;
    top: 30rem;
    transform: translate(-50%,-50%);
    font-family: Arial;
    z-index: -1;
    @media screen and (max-width: 968px) and (orientation: landscape) {
      top: 23rem;
    }
  `;

  const Background = styled.div`
  background-color: black;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 85%;
  `;

  const Icon = styled.img`
      border-radius: 100rem;
      position: absolute;
      border-style: solid; 
      border-color: white;
      left: 50%;
      top: 25rem;
      margin-top: -10vh;
      transform: translate(-50%,-50%);
      z-index: -1;
      @media screen and (max-width: 968px) and (orientation: landscape) {
        margin-top: -40vh;
      }
  `;
