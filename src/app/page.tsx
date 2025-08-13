import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Hero } from './_components/hero';
import { Header } from './_components/header';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <section className="h-screen"></section>
    </main>
  );
}
