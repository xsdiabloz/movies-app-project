import "../animations/loadingAnimation.css";
import { MdCancel } from "react-icons/md";
import React, { type FormEvent, useState, useEffect } from "react";
import { searchMovies, getPopulorMovie } from "../services/api";
import { MovieCard } from "../components/MovieCard";
import type { TTypes } from "../types/types";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<TTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  function handleClean(): void {
    setSearchQuery("");
  }

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

  async function handleSearch(e: FormEvent<HTMLFormElement>): Promise<void> {
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
        className="relative flex w-full max-w-md mx-auto mb-8"
        onSubmit={handleSearch}
      >
        <div className="relative flex-1">
          <input
            className="w-full border-2 border-gray-400 rounded-l-lg p-2 pr-10 focus:outline-none focus:border-blue-500"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies..."
          />

          {searchQuery && (
            <button
              className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={handleClean}
            >
              <MdCancel />
            </button>
          )}
        </div>

        <button
          className="bg-blue-600 text-white rounded-r-lg px-4 cursor-pointer hover:bg-blue-900 transition-colors duration-200"
          type="submit"
        >
          Search
        </button>
      </form>

      {error && <div>Error</div>}

      {loading ? (
        <div className="spinner">
          <div className="spin"></div>
        </div>
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
