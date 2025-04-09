export async function GET() {
  const movies = [
    {
      id: 1,
      title: "رها",
      genre: "Drama",
      rating: 8.5,
      image: "/images/Rahaposter.jpg",
    },
    {
      id: 2,
      title: "موسی",
      genre: "Sci-Fi",
      rating: 8.9,
      image: "/images/musaposter.jpg",
    },
    {
      id: 3,
      title: "تمساح خونی",
      genre: "Comedy",
      rating: 8.0,
      image: "/images/temsahposter.jpg",
    },
    {
      id: 4,
      title: "بامبولک",
      genre: "Comedy",
      rating: 6.2,
      image: "/images/bambbol.jpg",
    },
    {
      id: 5,
      title: "پیشمرگ",
      genre: "Action",
      rating: 7.2,
      image: "/images/pishmarg.jpg",
    },
    {
      id: 6,
      title: "معجزه پروین",
      genre: "Drama",
      rating: 7.8,
      image: "/images/parvin.png",
    },
  ];

  return Response.json(movies);
}
