import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  background-color: #2F4E78;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  opacity: 0.9;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;