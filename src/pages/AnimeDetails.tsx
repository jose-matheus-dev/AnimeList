import { Background, Header, Main } from '@/components/layout';
import { slideIn, slideOut } from '@/components/theme';
import { Cover } from '@/components/widgets/Cover';
import { useApp } from '@/hooks';
import { Link } from 'react-router';
import styled, { css } from 'styled-components';

const details = [
  {
    title: 'Jujutsu Kaisen',
    description: [
      'The second season delves into the dark past of Satoru Gojo and Suguru Geto, while the present unfolds a war against ancient curses! Follow Yuji Itadori in epic battles against terrifying entities, enhanced by cinematic animation and gripping plot twists.',
      'The anime is renowned for its intense action sequences, compelling characters, and a profound exploration of the soul’s strength.',
    ],
    cover:
      'https://m.media-amazon.com/images/M/MV5BZDZkMGQzOWItZGMzZC00MDVhLWI3NTYtN2ZlMDA4ODliMzJhXkEyXkFqcGc@._V1_.jpg',
    season: 2,
    episodes: 24,
    imdb: 8.5,
    url: 'https://www.google.com/search?q=Jujutsu+Kaisen',
  },
  {
    title: 'Demon Slayer',
    description: [
      'Tanjiro Kamado embarks on an exhilarating journey to save his sister Nezuko, who has been turned into a demon. Armed with blazing blades, elemental breathing techniques, and iconic foes like the Twelve Moons.',
      'The anime masterfully balances Tanjiro’s emotional quest with breathtaking action and a touching narrative about family, resilience, and even empathy toward the demons he battles.',
    ],
    season: 1,
    episodes: 26,
    cover:
      'https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    imdb: 8.6,
    url: 'https://www.google.com/search?q=Demon+Slayer',
  },
  {
    title: 'Spy × Family',
    description: [
      'A fake family with explosive secrets: an elite spy, a professional assassin, and a telepathic child! Dive into a blend of hilarious action, heartwarming moments, and covert missions in this comedy packed with unpredictable plot twists.',
      'The dynamic between Anya, Loid, and Yor will effortlessly charm you, leaving you grinning in every episode!',
    ],
    season: 1,
    episodes: 25,
    cover:
      'https://m.media-amazon.com/images/M/MV5BZjNjN2UyYTYtMjY2Zi00ZWFlLWFmMDItZTNkMzQ3MDc1Yjg5XkEyXkFqcGc@._V1_.jpg',
    imdb: 8.3,
    url: 'https://www.google.com/search?q=Spy+×+Family',
  },
];

export function AnimeDetails() {
  const { app } = useApp();
  const detail = details[app.idx];

  return (
    <>
      <Header />
      <Main>
        <StyledBackground $isPageLeaving={app.isPageLeaving} />
        <Article>
          <Section $isPageLeaving={app.isPageLeaving}>
            <h2>{detail.title}</h2>
            <span>Season {detail.season}</span>
            <span>{detail.episodes} Episodes</span>
            <Description>
              {detail.description.map((des, i) => (
                <p key={i}>{des}</p>
              ))}
            </Description>
            <StyledLink to={detail.url} target="_blank" title={`Search "${detail.title}" on Google`}>
              Learn More
            </StyledLink>
            <Rating title="IMDb Rating">{detail.imdb}</Rating>
          </Section>
          <Cover src={detail.cover} />
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
`;

const Section = styled.section<{ $isPageLeaving: boolean }>`
  display: grid;

  min-height: 55%;

  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: max-content max-content auto;

  column-gap: min(0.72vw, 1.28vh);

  padding: min(3.69vw, 6.56vh);
  border-radius: min(3.69vw, 6.56vh);

  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);

  text-align: left;
  & * {
    line-height: 1.25em;
    font-family: 'Roboto', system-ui, sans-serif;
    font-weight: 700;
  }
  h2 {
    grid-area: span 2 / 1;
    font-size: calc(min(4.48vh, 2.52vw) + 0.306rem);
    letter-spacing: min(0.045vw, 0.8vh);
    color: #ffffff;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: calc(min(0.27vw, 0.48vh) + 0.0765rem) solid #535353;
    }
  }
  span {
    display: flex;
    align-items: center;

    min-width: max-content;

    grid-area: auto / 2;
    font-size: calc(min(0.99vw, 1.76vh) + 0.153rem);
    color: #535353;
  }

  ${({ $isPageLeaving }) => css`
    animation: ${$isPageLeaving ? slideOut : slideIn} 0.25s ease ${$isPageLeaving && '0.25s'} forwards;
    --x: -100vw;
  `}
`;

const Description = styled.div`
  padding-top: 5px;
  white-space: pre-line;
  text-indent: 2em;
  max-width: min(53.37vw, 94.88vh);
  margin-top: min(0.72vw, 1.28vh);
  grid-area: 3 / span 2;
  color: #000000;
  font-size: calc(min(0.99vw, 1.76vh) + 0.153rem);
  p {
    font-weight: 400;
  }
`;

const StyledLink = styled(Link)`
  margin-top: min(1.08vw, 1.92vh);
  grid-area: 5 / auto;
  width: max-content;
  padding: calc(min(0.63vw, 1.12vh) + 0.153rem) calc(min(2.97vw, 5.28vh) + 0.153rem);

  background-image: linear-gradient(90deg, rgba(138, 43, 226, 0.8), rgba(255, 165, 0, 0.8));
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  font-size: calc(min(1.44vw, 2.56vh) + 0.153rem);
  color: #ffffff;

  border: 0;
  border-radius: max(min(2.97vw, 5.28vh), 2.5rem);
  &:hover {
    color: ${({ theme }) => theme.colors[0]};
  }
`;

const Rating = styled.div`
  position: absolute;
  right: min(7.38vw, 13.12vh);
  bottom: calc(min(5.31vw, 9.44vh) * -1);
  margin: auto;
  aspect-ratio: 1;
  height: min(10.62vw, 18.88vh);
  background-color: ${({ theme }) => theme.colors[theme.colors[0] === theme.accent ? 1 : 0]};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: calc(min(4.48vh, 2.52vw) + 0.306rem);
  font-weight: 700;
  letter-spacing: min(0.045vw, 0.8vh);
  color: #ffffff;
`;
