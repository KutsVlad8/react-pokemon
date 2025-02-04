import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import backgroundHeader from '../../assets/images/backgroundHeader.jpg';

export const Head = styled.header`
  display: flex;
  align-items: center;
  height: 115px;
  padding: 8px;

  background-image: url(${backgroundHeader});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Navigation = styled.nav`
  margin-left: 30px;
`;

export const NavigationItem = styled(NavLink)`
  color: #333;
  text-decoration: none;

  padding: 5px;
  border-radius: 2px;
  margin-left: 8px;

  &.active {
    background-color: #f5deb3;
    color: #333;
  }
`;
