'use client';
import { useCallback, useRef } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ContactButton } from '@/components/buttons';
import { useGSAP, SplitText, gsap } from '@/lib/gsap';

export function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      SplitText.create('.title', {
        type: 'chars, words',
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.chars, {
            x: 30,
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger: 0.05,
            delay: 0.2,
            onComplete: () => self.revert(),
          });
        },
      });

      SplitText.create('.sub-title', {
        type: 'chars, words',
        autoSplit: true,
        mask: 'chars',
        onSplit(self) {
          gsap.from(self.chars, {
            y: 30,
            stagger: 0.05,
            delay: 0.4,
            mask: 'chars',
            onComplete: () => self.revert(),
          });
        },
      });

      gsap.to('.hero-banner', {
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.15,
      });

      gsap.to('.cta', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
        delay: 0.4,
      });

      gsap.to('.service', {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.3,
        delay: 0.5,
      });
    },
    { scope: container }
  );

  const ServicesList = useCallback(
    ({ children }: PropsWithChildren) => (
      <div className="service flex translate-x-8 items-center gap-2 text-neutral-200 opacity-0">
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
        <div className="mt-28 w-full max-w-7xl px-4 sm:mt-48" ref={container}>
          {/** Hero Banner */}
          <div className="hero-banner flex max-w-[650px] flex-col gap-6 rounded-md p-6 opacity-0 backdrop-blur-sm sm:max-w-2/3 sm:gap-10">
            <div className="flex flex-col gap-2">
              <Badge className="bg-neutral-500/80">⭐ Transformamos tu espacio con estilo</Badge>
              <h2 className="title text-5xl font-bold text-neutral-200 sm:text-6xl">
                Pintura profesional
              </h2>
              <p className="sub-title text-xl font-semibold text-neutral-300 sm:text-2xl">
                para hogares, negocios o grandes proyectos.
              </p>
              <p className="sub-title text-neutral-300">
                De una pared a una torre, de un local a un centro comercial. Acabados impecables, a
                tiempo y con garantía.
              </p>
            </div>

            <ContactButton className="cta -translate-x-6 self-start opacity-0" />

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
