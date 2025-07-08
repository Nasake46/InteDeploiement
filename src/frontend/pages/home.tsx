import { useEffect, useState } from 'react';
import { fetchMangaList, Manga } from '../services/api';
import MangaCard from '../components/mangaCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [mangas, setMangas] = useState<Manga[]>([]);

  useEffect(() => {
    fetchMangaList(1).then(setMangas);
  }, []);

  return (
    <div className="home-container">
      <Link to="/profile" className="profile-link">Mon profil</Link>
      <h2>Bienvenue sur Nasa Manga ! </h2>
      <div className="manga-grid">
        {mangas.slice(0, 16).map((manga) => (
          <MangaCard key={manga.mal_id} manga={manga} />
        ))}
      </div>
    </div>
  );
}
