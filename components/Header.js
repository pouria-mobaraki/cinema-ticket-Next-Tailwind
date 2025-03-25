"use client";
import { useSearch } from "@/context/SearchContext";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { search, setSearch } = useSearch(); // دریافت مقدار جستجو از Context
  // const [search, setSearch] = useState("");

  return (
    <header className="bg-gray-100 text-gray-900 py-3 px-6 flex items-center justify-between shadow-lg">
      {/* بخش راست - لوگو */}
      <div className="text-2xl font-bold">
        <Link href="/">🎬 CinemaTicket</Link>
      </div>

      {/* بخش وسط - نوار جستجو */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="... جستجوی فیلم"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-center bg-gray-200 text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-600"
        />
      </div>

      {/* بخش چپ - لینک‌ها و دکمه‌ها */}
      <div className="flex items-center space-x-15">
        <Link href="/" className="hover:text-yellow-600">خانه</Link>
        <Link href="/movies" className="hover:text-yellow-600">فیلم‌ها</Link>
        <Link href="/about" className="hover:text-yellow-600">درباره ما</Link>
        <Link
          href="/login"
          className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-900 hover:bg-yellow-600"
        >
          ورود | ثبت‌ نام
        </Link>
      </div>
    </header>
  );
}
