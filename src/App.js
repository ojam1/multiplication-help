import React from "react";
import { createGlobalStyle } from "styled-components";

import Number from "./components/Number/Number";
import Grid from "./components/Grid/Grid";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%
  }

  body {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    margin: 0 auto;
    box-sizing: border-box
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
const App = () => (
  <>
    <GlobalStyle />
    <header>Which? Javascript exercise</header>
    <Grid>
      {Array.from({ length: 144 }).map((element, index) => {
        return <Number number={index + 1} highlighted={false} />;
      })}
    </Grid>
  </>
);

export default App;
