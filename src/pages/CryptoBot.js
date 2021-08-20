// import React, { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import best from '../components/images/best.png';

// function validateResponse(response) {
//   if (!response.ok) {
//       throw Error(response.statusText);
//   }
//   return response;
// }

function CryptoBot() {
  // const [picture, setPicture] = useState(best);
  // useEffect(() => {
  //   let coinName = 'btc';
  //   async function fetchData(coinName) {
  //     try {
  //       fetch(`https://6653e09e6331.ngrok.io/api/test`, coinName)
  //         .then(validateResponse)
  //         .then(response => response.blob())
  //         .then(blob => {
  //             setPicture(URL.createObjectURL(blob))
  //       })
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData(); 
  // });

  return (
    <Background>
            <Text>
              When i can i will be getting the bot to work with this website, for now heres the best predicted image i have from the bot.
              The bot predicts ahead a certain period of time, in this case it was 60 points ahead each point being 5 mins. This means the bot was
              able to predict to a certain degree this crypto, 5 hours ahead of time. However, trust me the bot is not this good all the time. 
            </Text>
           <Image src={best} alt='best'></Image>
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

const Text = styled.p`
  color: white;
  width: 50%;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 5rem;
  text-align: center;
`;

const Image = styled.img`
  margin-left: 50%;
  transform: translate(-50%);
  width: 50%;
  @media screen and (max-width: 968px) {
    width: 100%
  }
`;