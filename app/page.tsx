import { ServicesDiv } from "@/components/sevices";
import { BestOptions } from "./../components/best-options";
import { Comments } from "@/components/comments";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { HeaderAndCard } from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark:text-tahiti">
      <HeaderAndCard />
      <ServicesDiv />
      <BestOptions />
      <Comments />
      <ContactUs />
      <Footer />
    </div>
  );
}
