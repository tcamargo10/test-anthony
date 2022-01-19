import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
      font-size: 1rem;
      font-weight: bold;      
  }

  input {
      width: 100%;
      padding: 20px;
      border: 2px solid #D1D5DB;
      border-radius: 4px;
      font-size: 1rem;
      margin-top: 4px;
  }

  span {
    font-size: 0.8rem;
    font-weight: 300;
    color: #6B7280;
  }

  .label-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;