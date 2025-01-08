import { opaque, slideIn, slideOut } from '@/components/theme';
import { RadioIndicator } from '@/components/widgets';
import { useApp } from '@/hooks';
import { AnimeProps, animes } from '@/utils/AnimeList';
import styled, { css } from 'styled-components';

export function Carousel() {
  const { app, setApp } = useApp();

  const handleClick = (idx: number) => {
    setApp({ ...app, idx });
  };
  return (
    <>
      <RadioIndicator />
      <List $isPageLeaving={app.isPageLeaving}>
        {animes.map((anime, i) => (
          <Item key={i} $anime={anime} $order={(2 * app.idx + i) % 3} onClick={() => handleClick(i)}>
            <Section tabIndex={(2 * app.idx + i) % 3}>
              <h2>{anime.name}</h2>
              <p>{anime.description}</p>
            </Section>
          </Item>
        ))}
      </List>
    </>
  );
}

const Section = styled.div`
  position: absolute;
  top: 40%;
  z-index: 5;
  padding: 0 10% 2.5%;
  cursor: pointer;
  & * {
    line-height: 1.15em;
    font-family: 'Roboto', system-ui, sans-serif;
    text-shadow: 0.128vh 0px 0px #000, -0.128vh 0px 0px #000, 0px 0.128vh 0px #000, 0px -0.128vh 0px #000;
    font-weight: 700;
  }
  h2 {
    font-size: 2rem;
    font-size: clamp(0.15rem, min(calc(0rem + 5.28vh), calc(0rem + 2.97vw)), 9.5rem);
  }
  p {
    padding-top: 5%;
    font-size: 1.15rem;
    font-size: clamp(0.25rem, min(1.35vw, 2.4vh), 9.5rem);
  }
`;

const highlighted = css`
  width: 120%;
  height: 120%;
  bottom: -8.33%;
  border-radius: 0;
`;

const Item = styled.li<{ $anime: AnimeProps; $order: number }>`
  aspect-ratio: 6 / 7;
  width: min(26.37vw, 46.88vh);
  list-style: none;

  position: absolute;
  top: 9.8%;
  left: 5.6%;

  z-index: ${({ $order }) => -$order};
  transform: translateX(calc((100% + 5.56vw) * ${({ $order }) => $order}));
  transition: transform 0.25s ease-in;

  opacity: ${({ $order }) => ($order === 0 ? 1 : 0)};
  & ${Section} {
    opacity: 0;
    left: ${({ $order }) => ($order === 0 ? -20 : 0)}%;
    color: ${({ $anime }) => $anime.colors[0]};
    background-color: ${({ $anime }) => $anime.colors[1] + '44'};
    backdrop-filter: blur(8px);
  }
  &:hover ${Section}, ${Section}:focus {
    opacity: 1;
  }
  &::before {
    content: '';
    display: block;

    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 3;

    width: 100%;
    height: 100%;

    box-shadow: inset 0 0 1.28vh #0004, 0 0 1.28vh #0004;
    background: url(${({ $anime }) => $anime.cover}) center/contain no-repeat,
      linear-gradient(to bottom, ${({ $anime }) => $anime.colors[0]}, ${({ $anime }) => $anime.colors[1]});
    ${({ $order }) => $order === 0 && highlighted}
    border-radius: 10% 2%;
  }
`;

const List = styled.ul<{ $isPageLeaving: boolean }>`
  position: absolute;
  top: 21.43%;
  left: 6.15%;

  z-index: 5;

  width: 93.85%;
  height: 65.63%;

  ${({ $isPageLeaving }) => css`
    animation: ${$isPageLeaving ? slideOut : slideIn} 0.25s ease ${$isPageLeaving && '0.25s'} forwards;
    --y: 100vh;
    li {
      --y: 0;
      ${$isPageLeaving
        ? css`
            opacity: 1;
            animation: ${slideOut} 0.25s ease-out forwards;
          `
        : css`
            animation: ${slideIn} 0.25s ease-out, ${opaque} 0.25s forwards;
            animation-delay: 0.25s;
          `};
    }
  `}
`;
