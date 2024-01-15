import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordList from './pages/WordList/WordList';
import Main from './pages/Main/Main';
import SharedLayout from './pages/SharedLayout/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="words" element={<WordList />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
