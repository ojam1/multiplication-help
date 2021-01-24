import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

import mutlipleFinder from './utils/multiples'
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

const App = () => {
  const [selectedNumber, setSelected] = useState(0)
  const [multiples, setMultiples] = useState([])

  useEffect(() => {
    if (selectedNumber !== 0) setMultiples(mutlipleFinder(selectedNumber, 144))
  }, [selectedNumber])

  console.log(selectedNumber, multiples);

  const highlight = (number) => {
    return !!multiples.find(element => number === element)
  }
  return (
  <>
    <GlobalStyle />
    <header>Which? Javascript exercise</header>
    <Grid>
      {Array.from({ length: 144 }).map((element, index) => {
        return <Number number={index + 1} highlighted={highlight(index + 1)} onClickFunction={setSelected}/>;
      })}
    </Grid>
  </>
)};

export default App;
