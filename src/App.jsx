import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Terminal from "./Pages/Terminal.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import PortfolioDashboard from "./Pages/PortfolioDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Terminal' element={<Terminal />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Portfolio-Dashboard' element={<PortfolioDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App