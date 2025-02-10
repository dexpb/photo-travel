import { ServicesDiv } from "@/components/sevices";
import { BestOptions } from "./../components/best-options";
import SwiperImages from "@/components/swiper";
import { Comments } from "@/components/comments";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { HomeSide } from "@/components/home";

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col dark:text-tahiti">
      <div className="flex flex-col lg:flex-row bg-zinc-950">
        {/* Container do Swiper fixado */}
        <div className="lg:w-3/6 overflow-hidden">
          <SwiperImages />
        </div>

        {/* Conteúdo principal ao lado direito */}
        <div className="flex flex-1 flex-col gap-10 p-10" >
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
