'use client';

import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import Link from 'next/link';

export default function Header() {
  const [user, setUser] = useState(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const userName = getCookie('user');
    setUser(userName || null);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-100 text-gray-900 py-3 px-6 flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 z-50 ">
      {/* بخش راست - لوگو */}
      <div className="text-2xl font-bold">
        <Link href="/">🎬 CinemaTicket</Link>
      </div>

      {/* نوار جستجو */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="... جستجوی فیلم"
          className="w-full px-4 py-2 rounded-lg text-center bg-gray-200 text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-600"
        />
      </div>

      {/* دکمه منوی موبایل */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none">
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* لینک‌ها و دکمه‌ها */}
      <nav
        className={`absolute top-full left-0 w-full bg-gray-100 shadow-lg lg:static lg:w-auto lg:flex ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6">
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-yellow-600">
              خانه
            </Link>
          </li>
          <li>
            <Link href="/theaters" className="block px-4 py-2 hover:text-yellow-600">
              تئاتر
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 hover:text-yellow-600">
              درباره ما
            </Link>
          </li>
          <li>
            {user === undefined ? (
              <span className="block px-4 py-2">در حال بارگذاری...</span>
            ) : user ? (
              <span className="block px-4 py-2 text-gray-900">سلام، {user}</span>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 bg-yellow-500 rounded-lg text-gray-900 hover:bg-yellow-600"
              >
                ورود | ثبت‌نام
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
