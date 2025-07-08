import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Manga } from '../services/api';
import { Link } from 'react-router-dom';

export default function MangaDetail() {
  const { id } = useParams();
  const [manga, setManga] = useState<Manga | null>(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga/${id}`)
      .then((res) => res.json())
      .then((data) => setManga(data.data));
  }, [id]);

  if (!manga) return <div>Chargement...</div>; 

  return (
    <div className="manga-detail">
      <h2>{manga.title}</h2>
      <img src={manga.images.jpg.image_url} alt={manga.title} />
      <p>{manga.synopsis}</p>
      <p><strong>Chapitres :</strong> {manga.chapters || 'N/A'}</p>
      <p><strong>Statut :</strong> {manga.status}</p>
      <Link to="/home" className="back-button">← Retour à l'accueil</Link>
    </div>
  );
}
