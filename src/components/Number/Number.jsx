import React, { useState } from "react";

import Wrapper from "./number.style";

const Number = ({ number, highlighted }) => {
  const [highlight, setHighlight] = useState(highlighted);

  return (
    <Wrapper onClick={() => setHighlight(!highlight)} highlighted={highlight}>
      {number}
    </Wrapper>
  );
};

export default Number;
