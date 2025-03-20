export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-black to-gray-900 text-yellow-400 py-6 mt-10">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                قوانین و مقررات
              </a>
            </li>
          </ul>
          <p className="text-sm">© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    );
  }
  