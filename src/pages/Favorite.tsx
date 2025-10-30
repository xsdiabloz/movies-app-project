import React from "react";
import { useMovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";

export default function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 border-b-2 border-blue-500 inline-block pb-2">
          Your Favorite Movies
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="bg-slate-800 p-16 rounded-2xl shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl font-bold text-red-500 mb-6">
          No Favorite Movie Yet
        </h1>
        <p className="text-gray-300 text-lg">
          Start adding movies to your wishlist and they will appear here.
        </p>
      </div>
    </div>
  );
}
