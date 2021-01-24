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
  min-width: 20rem;
  min-height: 20rem;
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
`;
