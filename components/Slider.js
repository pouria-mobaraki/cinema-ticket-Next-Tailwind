"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



const Slider = () => {
  const slides = [
    { id: 1, title: "فیلم اول", img: "/images/Rahaposter.jpg" },
    { id: 2, title: "فیلم دوم", img: "/images/temsahposter.jpg" },
    { id: 3, title: "فیلم سوم", img: "/images/musaposter2.png" },
    { id: 4, title: "فیلم چهارم", img: "/images/bambbol.jpg" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-64 flex items-center justify-center bg-gradient-to-r from-black via-yellow-600 to-black">
              <img
                src={slide.img}
                alt={slide.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
