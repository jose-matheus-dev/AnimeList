import { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translate(var(--x), var(--y));
  }
`;
const slideOut = keyframes`
  to {
    transform: translate(var(--x), var(--y));
  }
`;
const opaque = keyframes`
  to {
    opacity: 1;
  }
`;
const rotate = keyframes`
  to {
    transform: rotate(var(--angle));
  }
`;

export { slideIn, slideOut, opaque, rotate };
