import { useLayoutEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export function ResponsiveGuard({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState(true);

  useLayoutEffect(() => {
    const check = () => {
      const { innerWidth: w, innerHeight: h } = window;
      const ratio = w / h;
      setAllowed(ratio >= 3 / 2 && h >= 200);
    };

    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (allowed) return <>{children}</>;

  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="#fff8"
          d="m21.323 8.616-4.94-4.94a1.25 1.25 0 0 0-1.767 0l-10.94 10.94a1.25 1.25 0 0 0 0 1.768l4.94 4.94a1.25 1.25 0 0 0 1.768 0l10.94-10.94a1.25 1.25 0 0 0 0-1.768zM14 5.707 19.293 11 11.5 18.793 6.207 13.5zm-4.323 14.91a.25.25 0 0 1-.354 0l-1.47-1.47.5-.5-2-2-.5.5-1.47-1.47a.25.25 0 0 1 0-.354L5.5 14.207l5.293 5.293zm10.94-10.94-.617.616L14.707 5l.616-.616a.25.25 0 0 1 .354 0l4.94 4.94a.25.25 0 0 1 0 .353m1.394 6.265V18a3.003 3.003 0 0 1-3 3h-3.292l1.635 1.634-.707.707-2.848-2.847 2.848-2.848.707.707L15.707 20h3.304a2 2 0 0 0 2-2v-2.058zM4 9H3V7a3.003 3.003 0 0 1 3-3h3.293L7.646 2.354l.707-.707 2.848 2.847L8.354 7.34l-.707-.707L9.28 5H6a2 2 0 0 0-2 2z"
        />
      </svg>
      <p>
        Rotate to landscape on mobile, or resize the window to at least a 3:2 ratio on desktop (fullscreen recommended
        for 16:9 screens).
      </p>
    </Container>
  );
}

const rotate = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  20% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(0.5rem, max(2vw, 2vh), 5rem);
  padding: clamp(0.25rem, min(2.34vw, 4.16vh), 2rem);

  svg {
    max-width: 60%;
    max-height: 60%;
    transform: rotate(-45deg);
    animation: ${rotate} 3s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }
`;
