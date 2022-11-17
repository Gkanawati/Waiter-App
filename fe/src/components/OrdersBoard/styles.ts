import styled from 'styled-components';

export const Board = styled.div`
  padding: 1rem;
  border: 0.0625rem solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and (max-width: 594px) {
    flex: none;
    width: 100%;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    width: 100%;
    background: #FFF;
    height: 8rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid rgba(204, 204, 204, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }

    & + button {
      margin-top: 1.5rem;
    }
  }
`;
