"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function SwiperImages() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="flex flex-col lg:min-h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        <SwiperSlide className="flex items-center justify-center text-center text-lg">
          <Image
            src="/egypt.png"
            alt=""
            className="w-full"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center text-lg">
          <Image
            src="/night-city.png"
            className="w-full object-fill"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
