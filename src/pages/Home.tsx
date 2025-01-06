import { Aside, Background, Header, Main } from '@/components/layout';
import { opaque, slideIn, slideOut } from '@/components/theme';
import { RadioIndicator } from '@/components/widgets';
import { useApp, useImagePreload } from '@/hooks';
import { animes } from '@/utils/AnimeList';
import styled, { css } from 'styled-components';

export function Home() {
  const { app } = useApp();
  useImagePreload(['hero-0', 'hero-1', 'hero-2'].map((img) => `/${img}.webp`));
  const handleClick = () => {};

  return (
    <>
      <Header />
      <Main>
        <HeroBanner $idx={app.idx} $colors={animes[app.idx].colors}>
          <RadioIndicator />
        </HeroBanner>
        <Background>
          <HeroSection $isPageLeaving={app.isPageLeaving}>
            <h1>
              DISCOVER, ORGANIZE, AND SHARE YOUR PASSION FOR ANIME.
              <br /> JOIN US ON ANIMELIST!
            </h1>
            <button onClick={handleClick}>Let's Go</button>
          </HeroSection>
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

const HeroSection = styled.section<{ $isPageLeaving: boolean }>`
  display: flex;
  justify-content: start;
  flex-direction: column;
  text-align: start;
  width: 84%;

  h1 {
    font-size: 38px;
    font-size: clamp(0.15rem, min(calc(0.306rem + 4.32vh), calc(0.306rem + 2.43vw)), 5.5rem);
    font-weight: 700;
    color: #000000;
  }
  button {
    width: max-content;
    padding: calc(min(0.99vw, 1.76vh) + 0.306rem) calc(min(3.69vw, 6.56vh) + 0.306rem);

    background-image: linear-gradient(90deg, rgba(138, 43, 226, 0.4), rgba(255, 165, 0, 0.4));
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    font-size: min(calc(1.44vw + 0.306rem), calc(2.56vh + 0.306rem));
    font-weight: 700;
    color: #ffffff;

    border: 0;
    border-radius: 0.625em;
  }

  ${({ $isPageLeaving }) => css`
    :is(h1, button) {
      animation: ${$isPageLeaving ? slideOut : slideIn} 0.25s ease-in forwards, ${opaque} forwards;
      animation-delay: ${!$isPageLeaving && '0.25s'};
      --x: -200%;
      opacity: 0;
    }
  `}
`;
