import './index.scss';
import { Routes, Route } from 'react-router-dom';

import Portfolio from './portfolio/Portfolio';
import Home from './Home';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}
