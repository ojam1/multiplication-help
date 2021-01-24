import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 1rem;
  row-gap: 2rem;

  @media only screen
  and (min-width: 768px)
  and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
  }

  @media only screen
  and (min-width: 1025px) {
      grid-template-columns: 1fr 1fr 1fr;
  }
`;