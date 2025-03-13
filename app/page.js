import Slider from "@/components/Slider";
import MovieCard from "@/components/MovieCard";

async function getMovies() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";
  
  const res = await fetch(`${baseUrl}/api/movies`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  return res.json();
}


export default async function Home() {
  const movies = await getMovies();

  return (
   <div >
    <Slider />

    <main className="container mx-auto p-4 text-center mt-15 ">
      <h1 className="text-3xl font-bold text-yellow-500 mb-8">🎬 لیست فیلم‌ها</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>

   </div>
  );
}
