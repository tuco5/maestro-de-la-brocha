import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Hero } from './_components/hero';
import { FacebookButton, InstagramButton, WhatsappButton } from '../components/buttons';

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

function Header() {
  return (
    <header className="fixed top-0 z-10 flex w-full justify-center px-4 py-2 backdrop-blur-sm">
      <div className="flex w-full max-w-6xl items-center justify-between px-4">
        <Logo className="text-xs" />
        <div className="flex gap-3">
          <FacebookButton />
          <InstagramButton />
          <WhatsappButton />
        </div>
      </div>
    </header>
  );
}

export function Logo({ className }: Props) {
  return (
    <div className={className}>
      <h1 className="text-primary flex flex-col items-center font-bold">
        <span className="font-rap-script text-gradient bg-orange-gradient px-[0.2em] text-[1.8em]">
          Maestro
        </span>
        <span className="font-paint-cans px-[0.3em] text-[0.6em]">de la</span>
        <span className="font-rap-script text-gradient bg-blue-gradient px-[0.25em] text-[1.8em]">
          brocha
        </span>
      </h1>
    </div>
  );
}
