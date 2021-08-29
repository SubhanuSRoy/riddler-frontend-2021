import React from "react";
import { ButtonWrap, Button } from "./SolutionsElements";
import "./style.css";

const Solutions = () => {
  return (
    <>
      <div id="solution-section">
        <h1>Riddler'21 has officially ended!</h1>
        <h3>We await your presence for Riddler'22.</h3>
        <ButtonWrap>
          <Button href="#" target="_blank">
            SOLUTIONS
          </Button>
        </ButtonWrap>
      </div>
    </>
  );
};

export default Solutions;