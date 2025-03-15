import Slider from "@/components/Slider";
import MoviesPage from "@/components/MoviesPage";


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

    <MoviesPage movies={movies} />

   </div>
  );
}
