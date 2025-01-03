import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useApp } from '@/hooks/useApp';
import { animes } from '@/utils/AnimeList';

export function RadioIndicator() {
  const { app, setApp } = useApp();
  const throttle = useRef(false);

  useEffect(() => {
    const onWheel = ({ deltaY }: WheelEvent) => {
      if (throttle.current) return;
      setApp((p) => ({ ...p, idx: (p.idx + (deltaY > 0 ? 1 : 2)) % animes.length }));
      throttle.current = true;
      setTimeout(() => (throttle.current = false), 250);
    };

    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, [setApp]);

  return (
    <Container>
      {animes.map((_, i) => (
        <RadioInput
          key={i}
          type="radio"
          name="options"
          value={i}
          checked={i === app.idx}
          onChange={() => setApp((p) => ({ ...p, idx: i }))}
          aria-label={`Selecionar o anime ${animes[i].name}`}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: calc(12.8vh + 1.375rem);

  position: absolute;
  left: 0;
  right: 0;
  bottom: 3.68%;
  margin: auto;
  z-index: 3;
  padding: 0.32vh;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  height: calc(2.08vh + 0.306rem);
  width: calc(2.08vh + 0.306rem);
  accent-color: ${({ theme }) => theme.accent};
  cursor: pointer;
`;
