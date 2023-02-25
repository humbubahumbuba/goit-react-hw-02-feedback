import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const Button = styled.button`
  width: 100px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 250ms linear;

  background-color: ${props => props.value === 'good' && 'green'};
  background-color: ${props => props.value === 'neutral' && 'grey'};
  background-color: ${props => props.value === 'bad' && 'red'};
  color: white;

  :hover {
    transform: scale(1.1);
  }
`;
