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
      genre: "Action",
      rating: 8.0,
      image: "/images/temsahposter.jpg",
    },
  ];

  return Response.json(movies);
}
