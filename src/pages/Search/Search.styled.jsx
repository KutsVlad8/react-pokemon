import styled from '@emotion/styled';

export const ResultsWrapper = styled.div`
  min-height: 300px; /* Задаем минимальную высоту */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background: #fbca06;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #fbca06;
  }
`;
