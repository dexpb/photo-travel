
import { HomeSide } from "./home";
import SwiperImages from "./swiper";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeaderAndCard() {
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
    <div className="flex flex-col bg-zinc-950 lg:flex-row">
      {/* Container do Swiper fixado */}
      <div className="overflow-hidden lg:w-3/6">
        <SwiperImages />
      </div>

      {/* Conteúdo principal ao lado direito */}
      <div className="flex flex-1 flex-col gap-10 p-10" ref={swiperRef}>
        {/* Barra de navegação */}
        <nav className="hidden font-inter text-2xl font-semibold">
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
        <HomeSide />
      </div>
    </div>
  );
}