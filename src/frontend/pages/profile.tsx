import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import '../../styles/profile.scss';

type User = {
  id: string;
  email: string;
};

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser({
          id: user.id,
          email: user.email ?? '',
        });
      }
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const goHome = () => {
    navigate('/home');
  };

  if (!user) return <div className="profile-container">Chargement...</div>;

  return (
    <div className="profile-container">
      <h2>Profil</h2>
      <div className="profile-card">
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>ID :</strong> {user.id}</p>

        <div className="profile-buttons">
          <button onClick={goHome}>Accueil</button>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      </div>
    </div>
  );
}
