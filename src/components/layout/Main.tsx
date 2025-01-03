import styled from 'styled-components';

export const Main = styled.main`
  position: relative;

  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;

  background: linear-gradient(to bottom left, ${({ theme }) => theme.colors[0]}, ${({ theme }) => theme.colors[1]});
  overflow: hidden;
`;
