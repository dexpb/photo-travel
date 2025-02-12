"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "./Variant/SlideIn";
import AnimatedParagraph from "./animated-paragraphs";

export function BestOptions() {
  return (
    <div className="h-full bg-zinc-950">
      <div className="m-20 flex w-full lg:w-4/6 flex-col gap-10">
        <motion.h1
          variants={slideIn("up", 0.01)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-5xl uppercase lg:text-[160px]"
        >
          Melhor opção
        </motion.h1>
        <AnimatedParagraph
          variants={slideIn("up", 0.01)}
          text="Com a Photo Travel, os clientes podem relaxar e aproveitar a viagem sem a preocupação de planejar tudo ou de carregar equipamentos fotográficos."
          className="font-inter lg:text-7xl"
        />
      </div>

      <div className="flex bg-zinc-900">
        <div className="flex flex-col lg:flex-row">
          <Image
            className="h-3/5 w-full object-cover lg:h-full lg:w-[900px]"
            src="/couple.png"
            alt="Casal viajando"
            width={900}
            height={600}
          />
          <div className="m-20 flex flex-col items-start justify-center gap-10 lg:w-2/6">
            <motion.h1
              variants={slideIn("up", 0.01)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-4xl uppercase lg:text-9xl"
            >
              Apaixonante
            </motion.h1>
            <AnimatedParagraph
              variants={slideIn("up", 0.01)}
              text="A Photo Travel é ideal para casais apaixonados porque oferece a oportunidade perfeita de celebrar momentos românticos em cenários deslumbrantes."
              className="font-inter text-lg font-semibold lg:text-4xl"
            />
          </div>
        </div>
      </div>

      <div className="flex bg-zinc-950">
        <div className="flex flex-col lg:flex-row">
          <Image
            className="h-3/5 w-full object-cover lg:h-full lg:w-[900px]"
            src="/comfortable.png"
            alt="Viagem confortável"
            width={900}
            height={600}
            loading="lazy"
          />
          <div className="m-20 flex flex-col items-start justify-center gap-10 lg:w-2/6">
            <motion.h1
              variants={slideIn("up", 0.01)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-5xl uppercase lg:text-9xl"
            >
              Conforto
            </motion.h1>
            <AnimatedParagraph
              variants={slideIn("up", 0.01)}
              text="A agência cuida de todos os detalhes, oferecendo conforto e uma experiência tranquila do começo ao fim."
              className="font-inter text-lg font-semibold lg:text-4xl"
            />
          </div>
        </div>
      </div>

      <div className="flex bg-zinc-900">
        <div className="flex flex-col lg:flex-row">
          <Image
            className="h-3/5 w-full object-cover lg:h-full lg:w-[900px]"
            src="/person-street.png"
            alt="Pessoa explorando cidade"
            width={900}
            height={600}
          />
          <div className="m-20 flex flex-col items-start justify-center gap-10 lg:w-2/6">
            <motion.h1
              variants={slideIn("up", 0.01)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-5xl uppercase lg:text-9xl"
            >
              Memórias
            </motion.h1>
            <AnimatedParagraph
              variants={slideIn("up", 0.01)}
              text="Os clientes recebem um pacote completo de fotos profissionais que imortalizam momentos especiais."
              className="font-inter text-lg font-semibold lg:text-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
