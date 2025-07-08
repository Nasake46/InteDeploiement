import { useNavigate } from 'react-router-dom';
import { Manga } from '../services/api'
import '../../styles/styles.scss'

export default function MangaCard({ manga }: { manga: Manga }) {
  const navigate = useNavigate();
  return (
    <div 
    className="manga-card"
    onClick={() => navigate(`/manga/${manga.mal_id}`)}
    >
      <img src={manga.images.jpg.image_url} alt={manga.title} />
      <h3>{manga.title}</h3>
    </div>
  )
}
