import { useEffect, useState } from 'react';
import { fetchMangaList, searchManga, Manga } from '../services/api';
import MangaCard from '../components/mangaCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (search.trim() === '') {
      setIsSearching(false);
      fetchMangaList(page).then(setMangas);
    } else {
      const delay = setTimeout(() => {
        setIsSearching(true);
        searchManga(search).then(setMangas);
      }, 500); // debounce de 500ms

      return () => clearTimeout(delay);
    }
  }, [search, page]);

  return (
    <div className="home-container">
      <Link to="/profile" className="profile-link">Mon profil</Link>
      <h2>Bienvenue sur Nasa Manga !</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Rechercher un manga..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setPage(1); // reset page en cas de recherche
        }}
      />

      <div className="manga-grid">
        {mangas.map(manga => (
          <MangaCard key={manga.mal_id} manga={manga} />
        ))}
      </div>

      {!isSearching && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>← Précédent</button>
          <span>Page {page}</span>
          <button onClick={() => setPage(page + 1)}>Suivant →</button>
        </div>
      )}
    </div>
  );
}
