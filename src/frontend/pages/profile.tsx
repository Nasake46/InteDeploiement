import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import type { User } from '@supabase/supabase-js';
import '../../styles/profile.scss';


export default function Profile() {
    const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  if (!user) return <div className="profile-container">Chargement...</div>;

  return (
    <div className="profile-container">
      <h2>Profil</h2>
      <div className="profile-card">
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>ID :</strong> {user.id}</p>
      </div>
    </div>
  );
}
