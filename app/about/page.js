

export default function AboutUsPage() {
  return (
    <>
<section className="py-12 bg-gray-900 text-white mt-10">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500">درباره ما</h1>
    <p className="text-lg text-center mb-8">
      ما در <span className="text-yellow-500">سینما تیکت</span> با هدف ارائه بهترین خدمات در زمینه فروش بلیت‌های سینمایی فعالیت می‌کنیم. تیم ما متشکل از افراد با تجربه و متخصص است که همواره در تلاش برای جلب رضایت مشتریان هستند.
    </p>

    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4 text-yellow-500">تماس با ما</h2>
      <p className="text-lg mb-2">آدرس: تهران، خیابان ولیعصر، کوچه سینما</p>
      <p className="text-lg mb-2">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
      <p className="text-lg mb-2">ایمیل: info@cinematicket.com</p>
      <div className="flex justify-center space-x-4 mt-4">
        {/* لینک‌های شبکه‌های اجتماعی */}
        <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
