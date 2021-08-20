import React from "react";
import styled from "styled-components";

function CryptoBot() {
  return (
    <Background>
           <h2 style={{color: "white"}}>Unfinished</h2>
           {/* <h2 style={{color: "white"}}>OKay</h2> */}
    </Background>
  );
}

export default CryptoBot;

const Background = styled.div`
    background-color: black;
    position: absolute;
    overflow: auto;
    width: 100%;
    height: 100%;
    opacity: 85%;
    display: grid;
    justify-content: center;
    align-items: center;
`;