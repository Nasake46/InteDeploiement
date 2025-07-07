import { useState } from 'react'
import { supabase } from '../services/supabase'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Inscription réussie ! Vérifie tes mails 📩')
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Inscription</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email :</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'Créer un compte'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
