import { Badge } from '@/components/ui/badge';
import { ContactButton } from '../../components/buttons';
import { CircleCheckBig } from 'lucide-react';

export function Hero() {
  const ServicesList = ({ children }: PropsWithChildren) => (
    <div className="flex items-center gap-2 text-neutral-200">
      <CircleCheckBig className="size-4 text-cyan-500" />
      {children}
    </div>
  );

  return (
    <section
      className="h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-black/80">
        <div className="w-full max-w-6xl px-4">
          <div className="flex max-w-2/3 flex-col gap-10 rounded-md bg-neutral-50/10 p-6 backdrop-blur-sm">
            <div>
              <Badge className="bg-neutral-500/80">Transformamos tu espacio con estilo</Badge>
              <h2 className="text-6xl font-bold text-neutral-200">Pintura profesional</h2>
              <p className="text-2xl font-semibold text-neutral-300">
                para hogares, negocios o grandes proyectos
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ServicesList>Residencial, comercial e institucional</ServicesList>
              <ServicesList>Pintura estructural para acero</ServicesList>
              <ServicesList>Murales artísticos para marcas</ServicesList>
              <ServicesList>Garantía y cumplimiento</ServicesList>
            </div>

            <ContactButton className="self-start" />
          </div>
        </div>
      </div>
    </section>
  );
}
