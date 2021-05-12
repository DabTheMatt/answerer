import React from "react";
import styled from "styled-components";
import {setColor, setFlex, setRem} from "../../styles";

const Home = () => {
    return(
        <HomeWrapper>
            <TitleWrapper>
            find the answer
            </TitleWrapper>
            <Arrow />
        </HomeWrapper>
    )
};

const HomeWrapper = styled.div`
background: ${setColor.dark};
color: ${setColor.light};
height: 100vh;
${setFlex()};
flex-direction: column;
`;

const TitleWrapper = styled.h1`
font-size: ${setRem(64)};
font-weight: 100;
`;

const Arrow = styled.div`
  margin-top: ${setRem(24)};
  border: solid ${setColor.orange};
  border-width: 0 5px 5px 0;
  
  display: inline-block;
  padding: 30px;
  transform: rotate(45deg);
  animation: blinking 5s ease-in-out infinite;
  position: relative;

    

  @keyframes blinking {
      50% {
        border: solid ${setColor.lighten};
        border-width: 0 5px 5px 0;
      }

    }
    &:hover {
      border: solid ${setColor.red};
      border-width: 0 5px 5px 0;
      animation: paused;
  }
`;

export default Home;