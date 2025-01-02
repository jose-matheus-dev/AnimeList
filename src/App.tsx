import { Route, Routes } from 'react-router';
import { Home, AnimeList, AnimeDetails } from './pages';
import { AppProvider } from './context/AppContext';

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
