import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Footer, Header } from "@/components/template";
import { Hero } from "./_components/hero";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header />
      <main className="w-full">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
