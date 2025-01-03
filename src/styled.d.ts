import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: [string, string];
    accent: string;
    idx: number;
  }
}
