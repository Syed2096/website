import React from "react";
import styled from 'styled-components';

function Footer() {
  return (
    <Background>
        <h2 style={{color: "white"}}>amdsyd2000@gmail.com </h2>
    </Background>
  );
}

export default Footer;

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 7vh;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
    background-repeat: repeat;
    background-attachment: scroll;
    background-position: 0% 0%;
    position: fixed;
    bottom: 0pt;
    left: 0pt;
`;