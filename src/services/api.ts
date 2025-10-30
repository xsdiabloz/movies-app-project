const API_KEY = "89b828b6d16b8c24d351f4feb7e6cec2";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopulorMovie() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data.results);
  return data.results;
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
}
