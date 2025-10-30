import React from "react";
import { MdFavorite } from "react-icons/md";
import type { MovieCardProps } from "../types/types";
import { useMovieContext } from "../context/MovieContext";

export function MovieCard({ movie }: MovieCardProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick() {
    if (favorite) removeFromFavorites(movie.id);
    else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="bg-slate-800 text-white rounded-xl overflow-hidden shadow-lg w-48 hover:scale-105 transition-transform">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <button
          onClick={onFavoriteClick}
          className={`absolute top-2 right-2 ${
            favorite ? "text-red-500" : "text-white-300"
          } hover:text-red-500 transition-colors`}
        >
          <MdFavorite className="cursor-pointer text-2xl" />
        </button>
      </div>

      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
}
