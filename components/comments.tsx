'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "./Variant/SlideIn";

export function Comments() {
  return (
    <div className="flex flex-col bg-zinc-950">
      <motion.div
        variants={slideIn("up", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="m-20 flex flex-col gap-10 w-4/6"
      >
        <h1 className="text-5xl uppercase lg:text-[180px]">
          O que dizem nossos clientes
        </h1>
        <p className="font-inter text-4xl lg:text-7xl">
          Veja comentários dos nossos clientes sobre nossa agência
        </p>
      </motion.div>

      <div className="flex flex-col lg:h-full lg:w-full lg:flex-wrap">
        <motion.div
          className="flex flex-col lg:flex-row"
          variants={slideIn("up", 0.01)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex w-full bg-zinc-800 font-inter lg:w-2/6">
            <div className="m-20 flex flex-col justify-between gap-10">
              <Image src="/aspas.svg" alt="aspas" width={50} height={0} loading="lazy"/>
              <h1 className="text-3xl font-bold">
                Uma experiência sem preocupações em Toscana
              </h1>
              <p className="font-inter text-xl">
                Viajar com a Photo Travel foi incrível! Eu sempre era a
                responsável por tirar fotos nas viagens da minha família, mas
                dessa vez, pude aproveitar cada passeio sem me preocupar. E o
                melhor de tudo: agora temos fotos profissionais de momentos tão
                espontâneos, que realmente capturaram nossa alegria. Valeu cada
                centavo!
              </p>
              <div className="flex items-center gap-5">
                <Image
                  src="/comment1.svg"
                  className="rounded-full"
                  alt=""
                  width={50}
                  height={0}
                  loading="lazy"
                />
                <h2 className="text-2xl">Dave Mitchell</h2>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-zinc-700 font-inter lg:w-2/6">
            <div className="m-20 flex flex-col justify-between gap-10">
              <Image src="/aspas.svg" alt="aspas" width={50} height={0} loading="lazy" />
              <h1 className="text-3xl font-bold">
                Lua de mel perfeita em Santorini
              </h1>
              <p className="font-inter text-xl">
                A viagem dos nossos sonhos se tornou ainda mais especial graças
                à Photo Travel! Não só aproveitamos cada segundo sem nos
                preocuparmos em tirar fotos, como voltamos para casa com um
                álbum maravilhoso.
              </p>
              <div className="flex items-center gap-5">
                <Image
                  src="/comment2.svg"
                  className="rounded-full"
                  alt=""
                  width={50}
                  height={0}
                  loading="lazy"
                />
                <h2 className="text-2xl">Sara Thompson</h2>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-zinc-800 font-inter lg:w-2/6">
            <div className="m-20 flex flex-col justify-between gap-10">
              <Image src="/aspas.svg" alt="aspas" width={50} height={0} loading="lazy" />
              <h1 className="text-3xl font-bold">
                Solução para todos meus problemas de viagem em Patagônia
              </h1>
              <p className="font-inter text-xl">
                Eu sempre quis explorar a Patagônia, e a Photo Travel não só
                organizou uma viagem espetacular, como também garantiu que eu
                tivesse fotos incríveis da experiência. Eu normalmente não gosto
                de ser fotografado, mas o fotógrafo foi tão discreto e
                profissional que me senti super à vontade. Agora tenho um
                registro impecável dessa aventura!
              </p>
              <div className="flex items-center gap-5">
                <Image
                  src="/comment3.svg"
                  className="rounded-full"
                  alt=""
                  width={50}
                  height={0}
                  loading="lazy"
                />
                <h2 className="text-2xl">Emil Rogers</h2>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row"
          variants={slideIn("up", 0.01)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex w-full bg-zinc-700 font-inter lg:w-2/6">
            <div className="m-20 flex flex-col justify-between gap-10">
              <Image src="/aspas.svg" alt="aspas" width={50} height={0} loading="lazy" />
              <h1 className="text-3xl font-bold">
                Aniversário de 10 anos de casamento nas Maldivas
              </h1>
              <p className="font-inter text-xl">
                Decidimos celebrar nossos 10 anos de casamento com uma viagem
                especial, e a Photo Travel fez tudo ser ainda mais inesquecível.
                As fotos ficaram incríveis, e o fotógrafo captou exatamente o
                que queríamos: nosso amor e conexão, sem nada forçado. Foi o
                presente perfeito para nós mesmos!
              </p>
              <div className="flex items-center gap-5">
                <Image
                  src="/comment4.svg"
                  className="rounded-full"
                  alt=""
                  width={50}
                  height={0}
                  loading="lazy"
                />
                <h2 className="text-2xl">Michaela Lee</h2>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-zinc-800 font-inter lg:w-2/6">
            <div className="m-20 flex flex-col justify-between gap-10">
              <Image src="/aspas.svg" alt="aspas" width={50} height={0} loading="lazy"/>
              <h1 className="text-3xl font-bold">
                Viagem Romântica para Paris
              </h1>
              <p className="font-inter text-xl">
                Paris é linda por si só, mas a experiência com a Photo Travel
                foi o toque de perfeição. O fotógrafo capturou momentos que
                jamais conseguiríamos sozinhos, e agora temos fotos de casal
                dignas de um filme! Recomendamos muito para quem quer viver o
                momento e ainda levar para casa lembranças registradas com muito
                profissionalismo.
              </p>
              <div className="flex items-center gap-5">
                <Image
                  src="/comment5.svg"
                  className="rounded-full"
                  alt=""
                  width={50}
                  height={0}
                  loading="lazy"
                />
                <h2 className="text-2xl">Amanda Lopez</h2>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-zinc-700 font-inter lg:w-2/6">
            <div className="m-20 flex flex-col justify-between gap-10">
              <Image src="/aspas.svg" alt="aspas" width={50} height={0} loading="lazy"/>
              <h1 className="text-3xl font-bold">
                Viagem de Aniversário para o Japão
              </h1>
              <p className="font-inter text-xl">
                empre sonhamos em visitar o Japão, e quando vimos que a Photo
                Travel oferecia pacotes com fotografia incluída, soubemos que
                era a escolha certa. A viagem foi perfeita do começo ao fim.
                Pudemos explorar templos, jardins e paisagens urbanas sem nos
                preocupar em tirar fotos.
              </p>
              <div className="flex items-center gap-5">
                <Image
                  src="/comment6.svg"
                  className="rounded-full"
                  alt=""
                  width={50}
                  height={0}
                  loading="lazy"
                />
                <h2 className="text-2xl">Jason Carter</h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
