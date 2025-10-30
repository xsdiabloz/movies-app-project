import React, { type FormEvent, useState, useEffect } from "react";
import { searchMovies, getPopulorMovie } from "../services/api";
import { MovieCard } from "../components/MovieCard";
import type { TTypes } from "../types/types";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<TTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadPopularMovies() {
      try {
        const popularMovies = await getPopulorMovie();
        setMovies(popularMovies);
      } catch (e) {
        console.log(e);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    }
    loadPopularMovies();
  }, []);

  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  }

  return (
    <div className="px-4 py-6">
      <form
        className="flex gap-2 w-full mx-auto mb-8 max-w-md"
        onSubmit={handleSearch}
      >
        <input
          className="flex-1 border-2 border-gray-400 rounded-l-lg p-2 focus:outline-none focus:border-blue-500"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button
          className="bg-blue-600 text-white rounded-r-lg px-4 cursor-pointer hover:bg-blue-900 transition-colors duration-200"
          type="submit"
        >
          Search
        </button>
      </form>

      {error && <div>Error</div>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 py-6">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
