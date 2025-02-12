"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function ContactUs() {
  // 🔥 Certifica que o swiperRef começa como null para evitar problemas no SSR
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return; // ✅ Evita erro se o ref ainda for null

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(swiperRef.current, {
      scale: 0.95, // Reduz o tamanho em 5%
      scrollTrigger: {
        trigger: swiperRef.current,
        start: "bottom bottom", // Quando a imagem atinge o topo da viewport
        scrub: 1, // Anima a imagem conforme o scroll
      },
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row" ref={swiperRef}>
      <Image
        src="/contact-us.png"
        className="h-full w-full object-cover"
        alt="Fale conosco"
        width={900}
        height={600} // ✅ Evita problemas no Next.js (height não pode ser 0)
        loading="lazy"
      />
      <div className="m-10 flex flex-col gap-10 lg:m-28">
        <h1 className="text-6xl uppercase lg:text-8xl">Fale conosco!</h1>
        <div className="text-break flex flex-1 flex-col justify-center gap-10 font-inter text-black">
          <div className="flex gap-10">
            <input
              type="text"
              placeholder="Nome e sobrenome"
              className="w-full bg-white p-5"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white p-5"
            />
          </div>
          <input
            type="text"
            placeholder="Deixe sua mensagem"
            className="h-[140px] w-full bg-white p-5 lg:w-[768px]"
          />
          <button className="h-12 rounded-full bg-white font-bold text-black">
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
