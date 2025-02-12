import { motion } from "framer-motion";
import { slideIn } from "./Variant/SlideIn";
import AnimatedParagraph from "./animated-paragraphs";

export function HomeSide() {
  return (
    <>
      <div className="flex flex-col lg:mx-20 lg:my-32">
        <motion.h1
          variants={slideIn("up", 0.01)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="font-anton text-7xl font-medium uppercase tracking-widest antialiased lg:text-[160px]"
        >
          Photo
        </motion.h1>
        <motion.h1
          variants={slideIn("up", 0.01)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="font-anton text-7xl font-medium uppercase tracking-widest antialiased lg:text-[160px]"
        >
          {" "}
          Travel
        </motion.h1>
        <motion.div
          variants={slideIn("up", 0.01)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <AnimatedParagraph
            text="Criando momentos impactantes e inesquecíveis da sua viagem"
            className="my-10 font-inter font-semibold text-4xl lg:text-5xl"
          />
        </motion.div>
      </div>

      {/* Informações adicionais */}
      <motion.div
        className="flex flex-col gap-10 text-2xl font-light"
        variants={slideIn("up", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <h2 className="font-anton lg:text-8xl">
          Capricho, inovação e marcante
        </h2>
        <AnimatedParagraph
          text="A Photo Travel é uma agência de viagens inovadora que combina turismo
          e fotografia para criar experiências inesquecíveis. Ao adquirir um
          pacote de viagem com a Photo Travel, os clientes não apenas exploram
          destinos deslumbrantes, mas também desfrutam de um serviço exclusivo
          de fotografia ao longo de toda a viagem."
        />

        <AnimatedParagraph
          text="Um fotógrafo profissional acompanha o grupo, capturando cada momento
          especial, garantindo que os viajantes possam se concentrar em
          aproveitar a jornada, enquanto o profissional se encarrega de
          registrar imagens de alta qualidade"
          variants={slideIn("up", 0.2)}
        />
      </motion.div>
    </>
  );
}
