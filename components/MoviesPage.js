"use client";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesPage({ movies }) {
  const [genre, setGenre] = useState("all");

  const filteredMovies = movies.filter((movie) => {
    return genre === "all" || movie.genre.includes(genre);
  });

  return (
    <div className="container mx-auto p-4 mt-15">
      {/* فیلتر ژانر */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-7 p-4 rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-black">
        <label className="text-yellow-400 font-bold">فیلتر بر اساس ژانر:</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-yellow-500 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="all">🎭 همه ژانرها</option>
          <option value="Action">🔥 اکشن</option>
          <option value="Drama">🎭 درام</option>
          <option value="Comedy">😂 کمدی</option>
        </select>
      </div>

      {/* لیست فیلم‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
