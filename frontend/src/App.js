import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import DashBoard from './pages/DashBoard';
import CMSpage from './pages/CMS-page';



const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/CMS" element={<CMSpage />} />
    </Routes>
  </BrowserRouter>
)

export default App