import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import TestSupabase from './components/testSupabase'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestSupabase />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
