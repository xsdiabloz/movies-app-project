import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { TTypes, TValue } from "../types/types";

interface IPropsMovieProvider {
  children: ReactNode;
}

const MovieContext = createContext<TValue | undefined>(undefined);

export function useMovieContext(): TValue {
  const context = useContext(MovieContext);
  if (!context)
    throw new Error("useMovieContext must be used within a MovieProvider");
  return context;
}

export const MovieProvider = ({ children }: IPropsMovieProvider) => {
  const [favorites, setFavorites] = useState<TTypes[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movie: TTypes): void {
    setFavorites((prev) => [...prev, movie]);
  }

  function removeFromFavorites(movieId: number): void {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  }

  function isFavorite(movieId: number): boolean {
    return favorites.some((movie) => movie.id === movieId);
  }

  const value: TValue = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
