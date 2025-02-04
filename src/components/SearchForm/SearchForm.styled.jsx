import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  // border-radius: 8px;
  // background: #f4f4f4;
  // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  border: 2px solid #fbca06;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 30px;

  &:focus {
    border-color: #fab205;
    outline: none;
  }

  option {
    background: #fff; /* Цвет фона в списке */
    color: #333; /* Цвет текста */
  }
`;

export const StyledLabel = styled.label`
  font-size: 24px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background: #fbca06;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  width: 120px;

  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: #fab205;
    color: #333;
  }
`;
