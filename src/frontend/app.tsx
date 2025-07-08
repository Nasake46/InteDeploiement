import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './pages/home'
import MangaDetail from './pages/mangaDetail'
import TestSupabase from './components/testSupabase'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestSupabase />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manga/:id" element={<MangaDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
