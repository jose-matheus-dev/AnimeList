import { Route, Routes } from 'react-router';
import { AppProvider } from '@/context/AppContext';
import { AnimeDetails, AnimeList, Home } from '@/pages';

function App() {
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
