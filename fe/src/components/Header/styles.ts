import styled from 'styled-components';

export const Container = styled.header`
  background-color: #d73035;
  display: flex;
  padding: 1.25rem 0;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 594px) {
    justify-content: center;
    text-align: center;
    flex-direction: column-reverse;

    img {
      width: 15.625rem;
      margin-bottom: 0.375rem;
    }
  }

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }
    h2{
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 0.375rem;
    }

    @media screen and (max-width: 594px) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 0.875rem;
      }
    }
  }
`;
