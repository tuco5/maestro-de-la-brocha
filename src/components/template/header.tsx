import { Whatsapp } from "../icons/whatsapp";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 flex min-h-16 w-full items-center justify-center bg-white/30 p-2 backdrop-blur-sm">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <Logo className="text-xl sm:text-2xl md:text-3xl" />
        <CTA />
      </div>
    </header>
  );
}

function CTA() {
  return (
    <button className="flex cursor-pointer gap-2 rounded-full bg-gradient-to-tr from-sky-400 to-teal-600 px-4 py-1.5 font-semibold text-white transition hover:opacity-85">
      <span>Cotizar</span>
      <Whatsapp width="20px" height="20px" />
    </button>
  );
}
