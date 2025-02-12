'use client'
import { motion } from "motion/react";
import { slideIn } from "./Variant/SlideIn";
export function Footer() {
  return (
      <motion.div
        variants={slideIn("up", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="h-full w-full bg-white p-20 font-bold text-black"
      >
        <h1 className="font-anton text-7xl font-extrabold uppercase lg:text-[240px]">
          Photo Travel
        </h1>
        <p className="font-inter text-3xl text-zinc-500  lg:w-5/6 lg:text-7xl">
          Viva o momento, nós capturamos a sua história.
        </p>
        <div className="my-32 flex w-3/6 justify-between gap-20">
          <ul className="flex flex-col gap-2 font-inter">
            <a href="#">Home</a>
            <a href="#">Serviços</a>
            <a href="#">Ideias</a>
            <a href="#">Avaliações</a>
            <a href="#">Contato</a>
          </ul>
          <ul className="flex flex-col gap-2 font-inter">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">X</a>
          </ul>
        </div>
      </motion.div>
  );
}
