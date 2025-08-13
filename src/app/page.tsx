import { Hero } from './_components/hero';
import { Header } from './_components/header';

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <section className="h-screen"></section>
    </main>
  );
}
