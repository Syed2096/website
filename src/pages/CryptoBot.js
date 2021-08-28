// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import styled from "styled-components";
import best from '../components/images/best.png';
import { Input, Button, Row, Col } from 'antd';

function CryptoBot() {
  const picture = best;
  const [coin, setCoin] = useState();
  const [showBest, setShowBest] = useState(true);
  const [leftPicture, setLeftPicture] = useState();
  const [rightPicture, setRightPicture] = useState();

  function validateResponse(response) {
    if (!response.ok) {
      setShowBest(true);
    } else {
      setShowBest(false);
    }
    return response;
  }

  function getData(val) {
    // console.log(val.target.value);
    setCoin(val.target.value);
  }

  async function update() {
    // Try updating if not keep best
    try {
      await getImage1(coin);
      await getImage2(coin);

    } catch (err) {
      setShowBest(true);
      console.log(err);
    }
  }

  async function getImage1(coinName) {
    await fetch('https://d68f-2607-fea8-d20-873a-40f0-48d4-3b3-2706.ngrok.io/image1', {
      method: 'POST',
      body: JSON.stringify({ coin : coinName})
    }).then(validateResponse)
    .then(response => response.blob())
    .then(blob => {
      setLeftPicture(URL.createObjectURL(blob));
    }) 
  }

  async function getImage2(coinName) {
    await fetch('https://d68f-2607-fea8-d20-873a-40f0-48d4-3b3-2706.ngrok.io/image2', {
      method: 'POST',
      body: JSON.stringify({ coin : coinName})
    }).then(validateResponse)
    .then(response => response.blob())
    .then(blob => {
      setRightPicture(URL.createObjectURL(blob));
    }) 
  }

  // useEffect(() => {
  //   let coinName = 'btc';
  //   async function fetchData(coinName) {
  //     try {
  //       fetch(`https://6653e09e6331.ngrok.io/test`, coinName)
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
            {/* <Text>
              When i can i will be getting the bot to work with this website, for now heres the best predicted image i have from the bot.
              The bot predicts ahead a certain period of time, in this case it was 60 points ahead each point being 5 mins. This means the bot was
              able to predict to a certain degree this crypto, 5 hours ahead of time. However, trust me the bot is not this good all the time. 
            </Text>
           <Image src={best} alt='best'></Image> */}
           <Text>Search up a coin from binance, for example btc, eth, ada, etc. Some coins will not work with the bot, I've set the limit to 100 coins. Each point is 5 mins apart and the bot predicts 60 points ahead (5 hours). You may have to click the button again for a proper result. If the bot isn't down it will give u a proper result eventually.</Text>
          {showBest ? 
          <div style={{marginTop: '-5rem'}}>
            <Text>This shows up if the coin your input is invalid or the bot is down! Here's proof this project wasn't a complete failure.</Text>
            <Image src={picture} alt="temp"/>
          </div> : 
          <>
            <Row style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
              <Col>
                <Image src={leftPicture} alt="temp"/>
              </Col>
              <Col>
                <Image src={rightPicture} alt="temp"/>
              </Col>
            </Row>
          </>
          }
          <Row style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <Col style={{padding: '10px'}}>
              <Input onChange={getData} style={{width: '100%'}} placeholder='Search up a coin!'></Input>
            </Col>
            <Col>
              <Button onClick={update}>Click Me!</Button>
            </Col>           
          </Row>
           
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
    @media screen and (max-width: 968px) {
      overflow-x: hidden;
    }
`;

const Text = styled.p`
  color: white;
  width: 50%;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 5rem;
  text-align: center;
  @media screen and (max-width: 968px) {
    width: 70%
  }
`;

const Image = styled.img`
  margin-left: 50%;
  transform: translate(-50%);
  @media screen and (max-width: 968px) {
    width: 100%
  }
`;