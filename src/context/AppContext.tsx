import { createContext, useState, useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useSearchParams } from 'react-router';

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

const defaultTheme = {
} as DefaultTheme;

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [theme, setTheme] = useState(defaultTheme);
  const [app, setApp] = useState({ idx: Math.abs(+searchParams.get('idx')!) % 3 || 0 });

  useEffect(() => {
    setSearchParams({ idx: String(app.idx) });
    setTheme((prevTheme) => ({ ...prevTheme, idx: app.idx }));
  }, [app.idx]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ theme, setTheme, app, setApp }}>{children}</AppContext.Provider>
    </ThemeProvider>
  );
};
