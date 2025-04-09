export default function TheaterCard({ theater }) {
    return (
      <div className="bg-zinc-900 border border-yellow-500 rounded-xl overflow-hidden shadow-lg w-64 hover:scale-105 transition-transform">
        <img
          src={theater.image}
          alt={theater.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-bold text-yellow-400">{theater.title}</h2>
          <p className="text-gray-300 text-sm">ژانر: {theater.genre}</p>
          <p className="text-yellow-300 text-sm">⭐ امتیاز: {theater.rating}</p>
        </div>
      </div>
    );
  }
  