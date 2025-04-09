import { getMovies } from "@/app/page";
import Link from "next/link";

async function getMovieById(id) {
  const movies = await getMovies();
  const movie = movies.find((movie) => String(movie.id) === String(id));
  return movie;
}

export default async function MovieDetails({ params }) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    return <div className="text-red-500 p-4">فیلم مورد نظر پیدا نشد</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-black via-zinc-900 to-yellow-900 rounded-xl overflow-hidden shadow-2xl border border-yellow-500">
        {/* تصویر */}
        <div className="relative w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover object-top rounded-b-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* محتوا */}
        <div className="p-6 md:p-8 space-y-4">
          <h1 className="text-4xl font-bold text-yellow-400">{movie.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-300">
            <span>🎬 ژانر: <span className="text-white">{movie.genre}</span></span>
            <span>⭐ امتیاز: <span className="text-yellow-300 font-semibold">{movie.rating}</span></span>
          </div>

          <p className="text-gray-300 leading-7 text-justify">
            {movie.description || (
              <>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. همچنین در این فیلم شاهد بازی قدرتمند بازیگران اصلی و جلوه‌های ویژه‌ی سطح بالا هستیم که تجربه‌ای بی‌نظیر رقم می‌زند.
              </>
            )}
          </p>

          <Link
            href="/"
            className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-5 rounded-lg shadow-md transition"
          >
            ← بازگشت به لیست فیلم‌ها
          </Link>
        </div>
      </div>
    </div>
  );
}
