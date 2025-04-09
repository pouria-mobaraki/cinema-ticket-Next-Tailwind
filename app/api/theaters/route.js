export async function GET() {
    const theaters = [
      {
        id: 1,
        title: " کورالاین ",
        genre: "کمدی",
        rating: 9.1,
        image: "/images/koralineT.webp",
      },
      {
        id: 2,
        title: "کتابخانه نیمه شب",
        genre: "درام",
        rating: 8.7,
        image: "/images/ketabkhaneT.webp",
      },
      {
        id: 3,
        title: "مضحکه سیاه",
        genre: "کمدی",
        rating: 8.7,
        image: "/images/mazhakeT.webp",
      },
      // ادامه...
    ];
  
    return Response.json(theaters);
  }
  