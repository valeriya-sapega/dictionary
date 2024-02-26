import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordList from './pages/WordList/WordList';
import Main from './pages/Main/Main';
import SharedLayout from './pages/SharedLayout/SharedLayout';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="words" element={<WordList />} />
          <Route 
            path='*'
            element={<Error text="Page you were looking for doesn't exist" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
