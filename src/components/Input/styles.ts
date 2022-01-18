import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 2px;
  }

  input {
      width: 100%;
      padding: 20px;
      border: 2px solid #D1D5DB;
      border-radius: 4px;
      margin-bottom: 20px;
      font-size: 1rem;
  }
`;