import { Aside, Background, Header, Main } from '@/components/layout';
import { slideIn, slideOut } from '@/components/theme';
import { useApp } from '@/hooks';
import styled from 'styled-components';

export function AnimeDetails() {
  const { app } = useApp();

  return (
    <>
      <Header />
      <Main>
        <Aside></Aside>
        <StyledBackground $isPageLeaving={app.isPageLeaving} />
        <Article>
          <div>
            <h1>Details - {app.isPageLeaving ? 'Leaving...' : 'Welcome!'}</h1>
          </div>
        </Article>
      </Main>
    </>
  );
}

const StyledBackground = styled(Background)<{ $isPageLeaving: boolean }>`
  animation: ${({ $isPageLeaving }) => ($isPageLeaving ? slideIn : slideOut)} ease-in-out 0.5s forwards;
  --x: -100vw;
  &::before {
    content: '';
    height: 100%;
    aspect-ratio: 1;

    position: absolute;
    right: -100vh;

    z-index: -1;

    background: url(${({ theme: { idx } }) => `/bg-${idx}.webp`}) #a1a1a1 repeat-x left / cover;
    clip-path: polygon(0 0, 100% 0, 49.2% 100%, 0 100%);
  }
`;

const Article = styled.article`
  display: flex;
  gap: min(1.125vw, 2vh);

  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 4% 2% 0;

  position: absolute;

  div {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100vw - (100vh) / 3 * 2);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
