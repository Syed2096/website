import React from "react";
import styled from 'styled-components';
import SkillsDash from "../components/SkillsDash";


function Skills() {
  return (
    <Background>
      <SkillsDash/>
    </Background>
  );
}

export default Skills;

const Background = styled.div`
  background-color: black;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  opacity: 85%;
`;