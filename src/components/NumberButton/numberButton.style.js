import styled from "styled-components";

export default styled.div.attrs(({ number }) => ({
  tabIndex: 0,
  "aria-label": `number ${number}`,
}))`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  padding: 1rem;
  color: black;
  border: 2px solid black;
  background-color: ${({ highlighted }) => (highlighted ? "yellow" : "white")};

  &:focus {
    outline: 0;
  }

  &:focus-visible {
    outline: 2px solid blue
  }

  @media only screen
  and (min-width: 768px) {
    margin: 0;
    width: 30rem;
    height: 30rem;
    font-size: 3.5rem;
  }
`;
