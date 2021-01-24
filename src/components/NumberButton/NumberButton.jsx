import React from "react";

import Wrapper from "./numberButton.style";

const NumberButton = ({ number, highlighted, onClickFunction }) => (
  <Wrapper
    onClick={() => onClickFunction(number)}
    highlighted={highlighted}
    number={number}
    onKeyPress={(e) => {
      if (e.code === "Enter") {
        onClickFunction(number);
      }
    }}
  >
    {number}
  </Wrapper>
);

export default NumberButton;
