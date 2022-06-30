import '../scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import TourItemDetails from './TourItemDetails';

const App = () => (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours/:name" element={<TourItemDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
