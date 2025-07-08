export interface Manga {
  mal_id: number;
  title: string;
  synopsis: string;
  chapters: number | null;
  status: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

export async function fetchMangaList(page: number): Promise<Manga[]> {
  const response = await fetch(`https://api.jikan.moe/v4/manga?page=${page}`);
  const data = await response.json();
  return data.data; // car Jikan renvoie { data: [...] }
}
