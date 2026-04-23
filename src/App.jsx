import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Terminal from "./Pages/Terminal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Terminal' element={<Terminal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App