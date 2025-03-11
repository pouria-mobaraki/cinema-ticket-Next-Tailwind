export async function GET() {
    const movies = [
      {
        id: 1,
        title: "The Dark Knight",
        poster: "/images/dark-knight.jpg",
        banner: "/images/dark-knight-banner.jpg",
        genre: ["Action", "Drama"],
        rating: 9.0,
        releaseDate: "2008-07-18",
        duration: "152 min",
      },
      {
        id: 2,
        title: "Inception",
        poster: "/images/inception.jpg",
        banner: "/images/inception-banner.jpg",
        genre: ["Sci-Fi", "Action"],
        rating: 8.8,
        releaseDate: "2010-07-16",
        duration: "148 min",
      },
    ];
  
    return Response.json(movies);
  }
  