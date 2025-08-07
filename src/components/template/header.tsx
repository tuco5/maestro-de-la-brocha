import { Whatsapp } from "../icons/whatsapp";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="w-full absolute top-0 left-0 h-16 flex items-center justify-center bg-white/30 backdrop-blur-sm z-10">
      <div className="max-w-6xl flex justify-between w-full items-center">
        <Logo />
        <Menu />
        <CTA />
      </div>
    </header>
  );
}

function Menu() {
  return (
    <div className="flex gap-4">
      <a href="#service">Servicios</a>
      <a href="#process">Proceso</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contactanos</a>
    </div>
  );
}

function CTA() {
  return (
    <button className="bg-gradient-to-tr from-sky-400 to-teal-600 text-white font-semibold px-4 py-1.5 rounded-full hover:opacity-85 cursor-pointer transition flex gap-2">
      <span>Cotiza Ahora</span>
      <Whatsapp width="20px" height="20px" />
    </button>
  );
}
