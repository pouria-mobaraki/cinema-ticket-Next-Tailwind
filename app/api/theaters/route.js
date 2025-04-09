export async function GET() {
    const theaters = [
      {
        id: 1,
        title: "نمایش شب دهم",
        genre: "درام",
        rating: 9.1,
        image: "/images/theater1.jpg",
      },
      {
        id: 2,
        title: "تئاتر سایه",
        genre: "تجربی",
        rating: 8.7,
        image: "/images/theater2.jpg",
      },
      // ادامه...
    ];
  
    return Response.json(theaters);
  }
  