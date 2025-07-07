import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/signup'
import TestSupabase from './components/testSupabase'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestSupabase />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
