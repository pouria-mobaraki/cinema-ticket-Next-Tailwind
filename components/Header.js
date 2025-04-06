'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getCookie } from 'cookies-next';
import Link from 'next/link';

export default function Header() {
  const [user, setUser] = useState(undefined);
  const pathname = usePathname();

  useEffect(() => {
    const userName = getCookie('user');
    setUser(userName || null);
  }, [pathname]);

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
          className="w-full px-4 py-2 rounded-lg text-center bg-gray-200 text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-600"
        />
      </div>

      {/* بخش چپ - لینک‌ها و دکمه‌ها */}
      <div className="flex items-center space-x-15">
        <Link href="/" className="hover:text-yellow-600">
          خانه
        </Link>
        <Link href="/movies" className="hover:text-yellow-600">
          فیلم‌ها
        </Link>
        <Link href="/about" className="hover:text-yellow-600">
          درباره ما
        </Link>
        {user === undefined ? (
          <span>در حال بارگذاری...</span>
        ) : user ? (
          <span className="text-gray-900">سلام، {user}</span>
        ) : (
          <Link
            href="/login"
            className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-900 hover:bg-yellow-600"
          >
            ورود | ثبت‌نام
          </Link>
        )}
      </div>
    </header>
  );
}
