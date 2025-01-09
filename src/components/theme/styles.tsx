import { createGlobalStyle } from 'styled-components';

const AppStyles = createGlobalStyle`
:root {
  --x: 0;
  --y: 0;
  --angle: 90deg;

  font-family: 'Quicksand', 'Roboto', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

body {
  display: flex;
  place-items: center;
  height: 100vh;
}

#root {
  text-align: center;
  height: 100%;
  width: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  -webkit-tap-highlight-color: transparent;
}
button:hover {
  border-color: #646cff;
}

`;

export { AppStyles };
