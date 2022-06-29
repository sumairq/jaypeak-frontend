import '../scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
