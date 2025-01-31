import styled from '@emotion/styled';
import backgroundFooter from '../../assets/images/backgroundHeader.jpg';

export const FooTer = styled.footer`
  height: 50px;
  padding: 8px;

  background-image: url(${backgroundFooter});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100px;
`;

export const Text = styled.p`
  margin: 0px;
  margin-top: 40px;
  text-align: center;
  color: #333;
`;
