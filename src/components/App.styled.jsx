import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;

  padding: 40px;
  margin: 0 auto;
  background-color: lightblue;
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 40px;
  }
`;
