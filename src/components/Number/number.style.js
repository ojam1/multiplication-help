import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  min-width: 20rem;
  min-height: 20rem;
  padding: 1rem;
  color: black;
  border: 2px solid black;
  background-color: ${({ highlighted }) => highlighted ? 'yellow' : 'white'};
`;