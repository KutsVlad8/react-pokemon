import styled from '@emotion/styled';

export const Card = styled.li`
  background-color: #fbca06;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

export const Content = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #f5deb3;
  margin: 10px;

  padding: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 0px;
  margin-top: 10px;

  font-size: 25px;
  color: #333;
`;

export const Type = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 0px;
  margin-top: 10px;
`;

export const Abilities = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 0px;
  margin-top: 10px;
`;
export const Stats = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  margin-top: 0px;
`;

export const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`;

export const StatsListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 400;
`;

export const Span = styled.span`
  color: #333;
  font-weight: 400;
  margin-left: 5px;
`;
