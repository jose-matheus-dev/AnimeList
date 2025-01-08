import arrow from '@/assets/arrow.png';
import { slideIn, slideOut } from '@/components/theme';
import { RadioIndicator } from '@/components/widgets/RadioIndicator';
import { useApp } from '@/hooks';
import { animes } from '@/utils/AnimeList';
import styled, { css, keyframes } from 'styled-components';

type CoverProps = {
  src: string;
};

export function Cover({ src }: CoverProps) {
  const { app, setApp } = useApp();

  const handleClick = (increment: number) => {
    setApp((prev) => ({ ...prev, idx: (prev.idx + increment) % animes.length }));
  };

  return (
    <>
      <Arrow $isPageLeaving={app.isPageLeaving} onClick={() => handleClick(2)} />
      <Wrapper $isPageLeaving={app.isPageLeaving}>
        <StyledCover $src={src} />
        <RadioIndicator />
      </Wrapper>
      <Arrow $isPageLeaving={app.isPageLeaving} onClick={() => handleClick(1)} />
    </>
  );
}

const Wrapper = styled.div<{ $isPageLeaving: boolean }>`
  position: relative;
  height: min(45vw, 80vh);
  align-self: end;
  img {
    aspect-ratio: 23 / 32;
    height: min(38.25vw, 68vh);
    border-radius: 2% 10%;
    object-fit: center/cover;

    ${({ $isPageLeaving }) => css`
      animation: ${$isPageLeaving ? slideOut : slideIn} 0.25s ease ${$isPageLeaving && '0.25s'} forwards;
      --y: 100vh;
    `}
  }
`;

const StyledCover = styled.div<{ $src: string }>`
  position: relative;
  aspect-ratio: 23 / 32;
  height: min(38.25vw, 68vh);
  background: url(${({ $src }) => $src}) center/cover;
  border-radius: 2% 10%;
  box-shadow: inset 0 0 1.28vh #0004, 0 0 1.28vh #0004;
`;

const Arrow = styled.button<{ $isPageLeaving: boolean }>`
  aspect-ratio: 1;
  padding: 0;
  height: min(7.02vw, 12.48vh);
  box-shadow: inset 0 0 1.28vh #0008;
  background: url(${arrow}) center / calc(min(4.48vh, 2.52vw) + 0.153rem) no-repeat, #d9d9d955;
  backdrop-filter: blur(8px);
  border-radius: 50%;
  z-index: 1;

  --scale: 1;
  &:last-of-type {
    --scale: -1;
  }

  ${({ $isPageLeaving }) => css`
    animation: ${$isPageLeaving ? arrowsOut : arrowsIn} 0.25s ease-in-out forwards;
  `}
`;

const arrowsIn = keyframes`
  0% {
    transform: translateY(100vh) rotate(calc(90deg * var(--scale))) scale(var(--scale));
  }
  90% {
    transform: translateY(0) rotate(calc(90deg * var(--scale))) scale(var(--scale));
  }
  100% {
    transform: translateY(0) scale(var(--scale));
  }
`;

const arrowsOut = keyframes`
  0% {
    transform: translateY(0) scale(var(--scale));
  }
  10% {
    transform: translateY(0) rotate(calc(-90deg * var(--scale))) scale(var(--scale));
  }
  100% {
    transform: translateY(100vh) rotate(calc(-90deg * var(--scale))) scale(var(--scale));
  }
`;
