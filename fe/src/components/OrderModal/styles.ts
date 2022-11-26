import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0,0,0, 0.8);
  left: 0rem;
  top: 0rem;
  backdrop-filter: blur(0.2813rem);
  width: 100%;
  height: 100%;
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
`;


export const ModalBody = styled.div`
  background: #fff;
  width: 30rem;
  padding: 2rem;
  border-radius: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
        line-height: 0;
        border: 0;
        background: transparent;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`;


export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 0.375rem;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 1.25rem;
        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;
        strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      opacity: 0.8;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    justify-content: center;
    background-color: #333;
    border-radius: 3rem;
    border: 0;
    color: #fff;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .secondary {
    padding: 0.75rem 1.5rem;
    color: #d73035;
    border: 0;
    font-weight: bold;
    background: transparent;
    margin-top: 0.5rem;
  }
`;
