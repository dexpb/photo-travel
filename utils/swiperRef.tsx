'use client'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      scale: 0.95, // Reduz o tamanho em 5%
      scrollTrigger: {
        trigger: ref.current,
        start: "top top", // Quando o elemento atinge o topo da viewport
        end: "+=1000px", // Ajuste conforme o comprimento do texto
        scrub: 1, // Anima o elemento conforme o scroll
      },
    });
  }, [ref]);
};

export default useGsapAnimation;
