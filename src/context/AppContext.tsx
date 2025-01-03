import { createContext, useState, useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useSearchParams } from 'react-router';
import { animes } from '@/utils/AnimeList';

type DefaultApp = {
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
  const idx = +(searchParams.get('idx') || 0) % 3;

  const defaultTheme = {
    path: paths.indexOf(window.location.pathname),
    accent: animes[idx].accent,
    colors: animes[idx].colors,
    idx,
  } as DefaultTheme;

  const [theme, setTheme] = useState(defaultTheme);
  const [app, setApp] = useState({ idx });

  useEffect(() => {
    setSearchParams({ idx: String(app.idx) });
    const anime = animes[app.idx];
    setTheme((prevTheme) => ({ ...prevTheme, colors: anime.colors, accent: anime.accent, idx: app.idx }));
  }, [app.idx]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ theme, setTheme, app, setApp }}>{children}</AppContext.Provider>
    </ThemeProvider>
  );
};
