"use client";
import { useEffect, useRef } from "react";
import { ServicesDiv } from "@/components/sevices";
import { BestOptions } from "./../components/best-options";
import SwiperImages from "@/components/swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Comments } from "@/components/comments";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { HomeSide } from "@/components/home";

export default function Home() {
  const swiperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(swiperRef.current, {
      scale: 0.95, // Reduz o tamanho em 5%
      scrollTrigger: {
        trigger: swiperRef.current,
        start: "top top", // Quando a imagem atinge o topo da viewport
        end: "+=1000px", // Ajuste conforme o comprimento do texto
        scrub: 1, // Anima a imagem conforme o scroll
      },
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col dark:text-tahiti">
      <div className="flex flex-col lg:flex-row bg-zinc-950">
        {/* Container do Swiper fixado */}
        <div className="lg:w-3/6 overflow-hidden">
          <SwiperImages />
        </div>

        {/* Conteúdo principal ao lado direito */}
        <div className="flex flex-1 flex-col gap-10 p-10" ref={swiperRef}>
          {/* Barra de navegação */}
          <nav className="font-inter text-2xl font-semibold hidden ">
            <ul className="flex flex-row items-center justify-around gap-20">
              <div className="flex gap-10">
                <li>Home</li>
                <li>Projetos</li>
                <li>Serviços</li>
              </div>
              <li className="cursor-pointer underline">Let&apos;s Talk!</li>
            </ul>
          </nav>

          {/* Título e descrição */}
         <HomeSide/>
        </div>
      </div>
      <ServicesDiv />
      <BestOptions />
      <Comments />
      <ContactUs/>
      <Footer/>
    </div>
  );
}
