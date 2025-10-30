export type TTypes = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

export type MovieCardProps = {
  movie: TTypes;
};

export type TValue = {
  favorites: TTypes[];
  addToFavorites: (movie: TTypes) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
};
