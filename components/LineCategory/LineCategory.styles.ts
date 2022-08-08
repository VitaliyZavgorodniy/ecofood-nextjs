import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;
