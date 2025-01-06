import styled, { css } from 'styled-components';
import { Aside, Background, Header, Main } from '@/components/layout';
import { RadioIndicator } from '@/components/widgets';
import { useApp, useImagePreload } from '@/hooks';
import { animes } from '@/utils/AnimeList';

export function Home() {
  const { app } = useApp();
  useImagePreload(['hero-0', 'hero-1', 'hero-2'].map((img) => `/${img}.webp`));

  return (
    <>
      <Header />
      <Main>
        <HeroBanner $idx={app.idx} $colors={animes[app.idx].colors}>
          <RadioIndicator />
        </HeroBanner>
        <Background>
          <h1>Home - {app.isPageLeaving ? 'Leaving...' : 'Welcome!'}</h1>
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
