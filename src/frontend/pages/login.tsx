import { useState } from 'react';
import { supabase } from '../services/supabase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setErrorMsg('');
      navigate('/home'); // ou autre route
    }
  };

  return (
    <div className='auth-page'>
      <div className='auth-card'>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email : </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe : </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
             Pas encore de compte ? <a href="/signup">Créer un compte</a>
        </p>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </div>  
    </div>
  );
}
