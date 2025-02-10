"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideIn } from "./Variant/SlideIn";
import AnimatedParagraph from "./animated-paragraphs";
import { motion } from "motion/react";

export function ServicesDiv() {
  const swiperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(swiperRef.current, {
      scale: 0.98, // Reduz o tamanho em 5%
      scrollTrigger: {
        trigger: swiperRef.current,
        start: "bottom bottom", // Quando a imagem atinge o topo da viewport
        scrub: 1, // Anima a imagem conforme o scroll
      },
    });
  }, []);

  return (
    <div className="bg-black">
      <div
        className="min-w-screen justify-items m-0 flex min-h-screen items-center bg-zinc-900"
        ref={swiperRef}
      >
        <div className="justify-items lg:m-20 flex flex-col">
          <div className="m-10 flex gap-10 flex-col w-5/6">
            <motion.h1
              variants={slideIn("up", 0.01)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="uppercase  text-5xl lg:text-[160px]"
            >
              Serviços
            </motion.h1>

            <AnimatedParagraph
              variants={slideIn("up", 0.01)}
              text=" Cada pacote de viagem inclui este serviço fotográfico, permitindo
              que os viajantes vivam intensamente a experiência sem se preocupar
              em perder os momentos perfeitos."
              className="text-balance font-inter font-semibold text-xl lg:text-6xl"
            />
          </div>

          <div className="flex h-full flex-wrap text-white">
            {/* Imagem 1 */}
            <div className="flex lg:w-1/2 flex-col items-start justify-center">
              <Image
                src="/person-street.svg"
                className="h-full w-full object-cover"
                alt="Pessoa na rua em Londres"
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="m-10 flex w-5/6 justify-between font-inter">
                <p>Londres (Inglaterra) </p>
                <span className="italic text-gray-400">(2024)</span>
              </div>
            </div>

            {/* Imagem 2 */}
            <div className="flex lg:w-1/2 flex-col items-start justify-center">
              <Image
                src="/woman-beach.svg"
                className="h-full w-full object-cover"
                alt="Mulher na praia"
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="m-10 flex w-5/6 justify-between font-inter">
                <p>Seul (Coreia do Sul) </p>
                <span className="italic text-gray-400">(2024)</span>
              </div>
            </div>

            {/* Imagem 3 */}
            <div className="flex lg:w-1/2 flex-col items-start justify-center">
              <Image
                src="/woman-photography.svg"
                className="h-full w-full object-cover"
                alt="Mulher tirando foto"
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="m-10 flex w-5/6 justify-between font-inter">
                <p>Califórnia (Estados Unidos) </p>
                <span className="italic text-gray-400">(2024)</span>
              </div>
            </div>

            {/* Imagem 4 */}
            <div className="flex lg:w-1/2 flex-col items-start justify-center">
              <Image
                src="/woman-church.svg"
                className="h-full w-full object-cover"
                alt="Mulher em uma igreja"
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="m-10 flex w-5/6 justify-between font-inter">
                <p>Istambul (Turquia)</p>
                <span className="italic text-gray-400">(2024)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
