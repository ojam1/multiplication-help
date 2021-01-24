import React from "react";

import Wrapper from "./number.style";

const Number = ({ number, highlighted, onClickFunction }) => (
    <Wrapper onClick={() => onClickFunction(number)} highlighted={highlighted}>
      {number}
    </Wrapper>
  );

export default Number;
