import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Header, Main, Aside, Background } from '../components/layout';
import { useApp } from '../hooks/useApp';
import { animes } from '../utils/AnimeList';
import { preload } from 'react-dom';

export function Home() {
  const { app } = useApp();
  useEffect(() => {
    ['bg-0', 'bg-1', 'bg-2', 'hero-0', 'hero-1', 'hero-2'].forEach((image) =>
      preload(`/${image}.webp`, { as: 'image' })
    );
  }, []);

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
    background: url(/hero-${$idx}.webp) bottom/cover, linear-gradient(to bottom left, ${$colors[0]}, ${$colors[1]});
  `}
  z-index: 1;
  outline: 0.128vh solid black;
`;
