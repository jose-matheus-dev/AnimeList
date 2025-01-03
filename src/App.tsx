import { Route, Routes } from 'react-router';
import { AppProvider } from '@/context/AppContext';
import { AnimeDetails, AnimeList, Home } from '@/pages';
import { useImagePreload } from '@/hooks';

function App() {
  useImagePreload(['bg-0', 'bg-1', 'bg-2'].map((img) => `/${img}.webp`));

  return (
    <AppProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/list" element={<AnimeList />} />
        <Route path="/details" element={<AnimeDetails />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
