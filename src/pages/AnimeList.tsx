import { Aside, Background, Header, Main } from '@/components/layout';
import { Carousel } from '@/components/widgets';
import styled from 'styled-components';

export function AnimeList() {
  return (
    <>
      <Header />
      <Main>
        <Carousel />
        <Aside>
          <StyledH2>
            MOST
            <br />
            POPULAR
          </StyledH2>
        </Aside>
        <Background />
      </Main>
    </>
  );
}

const StyledH2 = styled.h2`
  position: absolute;
  top: calc(8% - 0.306rem);
  left: 16.5%;

  width: max-content;
  height: max-content;

  line-height: 100%;
  text-align: left;
  font-size: clamp(0.5rem, calc(min(2.34vw, 4.16vh) + 0.306rem), 7.5rem);
`;
