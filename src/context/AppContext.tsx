import { createContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { animes } from '@/utils/AnimeList';

type DefaultApp = {
  isPageLeaving: boolean;
  idx: number;
};

type AppContextType = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  setApp: React.Dispatch<React.SetStateAction<DefaultApp>>;
  theme: DefaultTheme;
  app: DefaultApp;
};

export const paths = ['/', '/list', '/details'];

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const idx = Math.abs(+searchParams.get('idx')!) % animes.length || 0;

  const defaultTheme = {
    colors: animes[idx].colors,
    accent: animes[idx].accent,
    idx,
  };

  const [theme, setTheme] = useState(defaultTheme);
  const [app, setApp] = useState({ idx, isPageLeaving: false });

  useEffect(() => {
    setSearchParams({ idx: String(app.idx) });
    const anime = animes[app.idx];
    setTheme({ colors: anime.colors, accent: anime.accent, idx: app.idx });
  }, [app.idx]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ theme, setTheme, app, setApp }}>{children}</AppContext.Provider>
    </ThemeProvider>
  );
};
