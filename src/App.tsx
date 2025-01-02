import { Route, Routes } from 'react-router';
import './App.css';
import { AnimeDetails, AnimeList, Home } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/list" element={<AnimeList />} />
        <Route path="/details" element={<AnimeDetails />} />
      </Routes>
    </>
  );
}

export default App;
