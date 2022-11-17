import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 2.5rem auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 594px) {
    padding: 0 1rem;
  }
`;
