import { Badge } from '@/components/ui/badge';
import { ContactButton } from '../../components/buttons';
import { CircleCheckBig } from 'lucide-react';
import { useCallback } from 'react';

export function Hero() {
  const ServicesList = useCallback(
    ({ children }: PropsWithChildren) => (
      <div className="flex items-center gap-2 text-neutral-200">
        <CircleCheckBig className="size-4 text-cyan-500" />
        <p className="text-sm sm:text-base">{children}</p>
      </div>
    ),
    []
  );

  return (
    <section
      className="h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="flex h-full w-full flex-col items-center bg-black/60">
        <div className="mt-28 w-full max-w-7xl px-4 sm:mt-48">
          {/** Hero Banner */}
          <div className="flex max-w-[650px] flex-col gap-6 rounded-md p-6 backdrop-blur-sm sm:max-w-2/3 sm:gap-10">
            <div className="flex flex-col gap-2">
              <Badge className="bg-neutral-500/80">⭐ Transformamos tu espacio con estilo</Badge>
              <h2 className="text-5xl font-bold text-neutral-200 sm:text-6xl">
                Pintura profesional
              </h2>
              <p className="text-xl font-semibold text-neutral-300 sm:text-2xl">
                para hogares, negocios o grandes proyectos.
              </p>
              <p className="text-neutral-300">
                De una pared a una torre, de un local a un centro comercial. Acabados impecables, a
                tiempo y con garantía.
              </p>
            </div>

            <ContactButton className="self-start" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ServicesList>Residencial, comercial e institucional</ServicesList>
              <ServicesList>Pintura estructural para acero</ServicesList>
              <ServicesList>Murales artísticos para marcas</ServicesList>
              <ServicesList>Garantía y cumplimiento</ServicesList>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
