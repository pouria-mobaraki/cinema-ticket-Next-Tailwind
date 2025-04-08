"use client";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gradient-to-b from-black to-yellow-600 p-4 rounded-lg shadow-lg text-white">
      {/* تصویر فیلم */}
      <div className="relative w-full h-60">
        <Image
          src={movie.image}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* اطلاعات فیلم */}
      <div className="mt-4">
        <h3 className="text-xl font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-300">ژانر: {movie.genre}</p>
        <p className="text-sm text-yellow-300">⭐ امتیاز: {movie.rating}</p>

        {/* دکمه جزئیات بیشتر */}
        <button className="mt-3 w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-400">
           <Link href={`/movies/${movie.id}`}>جزییات بیشتر</Link>
        </button>
      </div>
    </div>
  );
}
