import { getMovies } from "@/app/page";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";


async function getMovieById(id) {
  const movies = await getMovies();
  const movie = movies.find((movie) => String(movie.id) === String(id));
  return movie
}

export default async function MovieDetails({ params }) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    return <div className="text-red-500 p-4">فیلم مورد نظر پیدا نشد</div>;
  }

  return (
    <>
     <div className="min-h-screen bg-black text-white py-10 px-4 mt-5">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-black via-zinc-900 to-yellow-900 rounded-2xl overflow-hidden shadow-xl border border-yellow-500">
        {/* تصویر فیلم */}
        <div className="relative w-full h-96">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* محتوای اطلاعات فیلم */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-extrabold text-yellow-400">{movie.title}</h1>
          <p className="text-gray-300">ژانر: <span className="text-white">{movie.genre}</span></p>
          <p className="text-yellow-300 font-medium">⭐ امتیاز: {movie.rating}</p>
          <p className="text-sm text-gray-400 leading-6">
            این فیلم یکی از بهترین آثار ژانر {movie.genre} است که با امتیاز {movie.rating} مورد توجه قرار گرفته. طراحی صحنه، داستان‌سرایی و بازی بازیگران در سطح بالایی قرار دارد.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold py-2 px-6 rounded-lg mt-4 shadow-md">
           <Link href="/"> بازگشت به لیست فیلم‌ها</Link>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
