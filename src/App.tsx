import { AppProvider } from '@/context/AppContext';
import { useApp, useImagePreload } from '@/hooks';
import { AnimeDetails, AnimeList, Home } from '@/pages';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';

function App() {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);

  const SyncLocation = () => {
    const { setApp } = useApp();

    useEffect(() => {
      if (location.pathname !== prevLocation.pathname) {
        setApp((prev) => ({ ...prev, isPageLeaving: true }));

        const timer = setTimeout(() => {
          setApp((prev) => ({ ...prev, isPageLeaving: false }));
          setPrevLocation(location);
        }, 500);

        return () => {
          clearTimeout(timer);
          setApp((prev) => ({ ...prev, isPageLeaving: false }));
        };
      }
    }, [location, prevLocation]);

    return null;
  };

  useImagePreload(['bg-0', 'bg-1', 'bg-2'].map((img) => `/${img}.webp`));
  return (
    <AppProvider>
      <SyncLocation />
      <Routes location={prevLocation} key={prevLocation.pathname}>
        <Route index element={<Home />} />
        <Route path="/list" element={<AnimeList />} />
        <Route path="/details" element={<AnimeDetails />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
