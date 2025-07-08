import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './pages/home'
import MangaDetail from './pages/mangaDetail'
import Profile from './pages/profile'
import ProtectedRoute from './components/protectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/manga/:id" element={<ProtectedRoute><MangaDetail /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
