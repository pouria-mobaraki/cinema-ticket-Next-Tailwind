import TheaterCard from "@/components/TheaterCard";

// app/theaters/page.jsx
async function getTheaters() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/theaters`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch theaters");
  }

  return res.json();
}

export default async function TheatersPage() {
  const theaters = await getTheaters();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-yellow-700 py-10 px-4 flex justify-center items-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {theaters.map((theater) => (
      <TheaterCard key={theater.id} theater={theater} />
    ))}
  </div>
</div>
  );
}
