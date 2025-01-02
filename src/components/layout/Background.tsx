import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100vw - (100vh) / 3 * 2);
  height: 100%;

  position: relative;

  background: url(${({ theme: { idx } }) => `/bg-${idx}.webp`}) #a1a1a1 repeat right / cover;

  @media (max-aspect-ratio: 22/15), (min-aspect-ratio: 23/12) {
    background-size: contain;
  }

  filter: drop-shadow(0 0px 8px rgba(0, 0, 0, 0.4));
`;
