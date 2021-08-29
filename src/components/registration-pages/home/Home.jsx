import React from "react";
// import { useEffect, useState } from "react";
// import Video from "./assets/teaser.mp4";
import riddlerLogo from "../../../assets/power.svg";
// import riddlerLogoSvg from "./assets/riddlerlogo_svg.svg";
// import Wave from "react-wavify";
import "./Home.css";
import {
  HomeContainer,
  // HomeBG,
  // VideoBG,
  HomeContent,
  HomeBtnWrapper,
  Button,
  RiddlerLogo,
  AboutBg,
} from "./HomeElements";

function Home() {
  return (
    <HomeContainer id="home">
      <AboutBg></AboutBg>
      <HomeContent>
        <RiddlerLogo>
          <img src={riddlerLogo} alt="Riddler Logo" />
          {/* <img className="shadow" src={riddlerLogoSvg} alt="Riddler Logo" /> */}
        </RiddlerLogo>
        <p className="dates">
          Riddler'21 has officially ended!
        </p>
        <HomeBtnWrapper>
          <Button href="#" target="_blank">SOLUTIONS</Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
