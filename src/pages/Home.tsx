import styled, { css } from 'styled-components';
import { Header, Main, Aside, Background } from '../components/layout';
import { useApp } from '../hooks/useApp';
import { animes } from '../utils/AnimeList';

export function Home() {
  const { app } = useApp();
  return (
    <>
      <Header />
      <Main>
        <HeroBanner $idx={app.idx} $colors={animes[app.idx].colors} />
        <Background>
          <h1>Home</h1>
        </Background>
      </Main>
    </>
  );
}

const HeroBanner = styled(Aside)<{ $idx: number; $colors: string[] }>`
  ${({ $idx, $colors }) => css`
    background: url(hero-${$idx}.png) bottom/cover, linear-gradient(to bottom left, ${$colors[0]}, ${$colors[1]});
  `}
  z-index: 1;
`;
