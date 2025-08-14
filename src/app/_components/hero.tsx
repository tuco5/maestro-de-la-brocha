'use client';
import { useCallback, useRef } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ContactButton } from '@/components/buttons';
import { useGSAP, SplitText, gsap } from '@/lib/gsap';

/**
 * The `Hero` component renders a full-screen section with a background image,
 * showcasing professional painting services. It incorporates GSAP animations
 * for various elements like the hero banner, title, subtitle, and service list.
 *
 * Animations:
 * - Initial animations make the hero banner and text elements fade and slide into view.
 * - Text elements are split into characters and words for individual animations.
 * - Call-to-action and service items fade and slide in sequentially.
 * - Scroll-triggered animations adjust the opacity of the hero banner.
 *
 * Inner Components:
 * - `ServicesList`: A functional component for displaying service items with a check icon.
 *
 * The hero section includes a title, subtitles, and a list of services, with a
 * contact button for user interaction.
 */

export function Hero() {
  // Animations
  const container = useRef(null);
  useGSAP(
    () => {
      // Initial Animations
      gsap.from('.hero-banner', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.15,
        onStart: () => {
          document.querySelector('.hero-banner')?.classList.replace('hidden', 'flex');
        },
      });

      SplitText.create('.title', {
        type: 'chars, words',
        autoSplit: true,
        mask: 'chars',
        onSplit(self) {
          gsap.from(self.chars, {
            y: 30,
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger: 0.1,
            delay: 0.2,
            ease: 'power3.out',
          });
        },
      });

      SplitText.create('.sub-title', {
        type: 'chars, words',
        autoSplit: true,
        mask: 'chars',
        onSplit(self) {
          gsap.from(self.chars, {
            x: 30,
            stagger: 0.02,
            delay: 0.4,
            ease: 'power3.inOut',
            mask: 'chars',
          });
        },
      });

      gsap.from('.cta', {
        x: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out',
        delay: 2,
        onStart: () => {
          document.querySelector('.cta')?.classList.replace('hidden', 'flex');
        },
      });

      gsap.from('.service', {
        opacity: 0,
        x: 24,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.3,
        delay: 3,
        onStart: () => {
          document
            .querySelectorAll('.service')
            .forEach((service) => service.classList.replace('hidden', 'flex'));
        },
      });

      // Scroll Animations
      gsap.from('.hero-banner', {
        opacity: 1,
        scrollTrigger: {
          trigger: '.hero-banner',
          start: '40% top',
          end: '60% top',
          scrub: 1,
        },
      });
    },
    { scope: container }
  );

  // Inner Component
  const ServicesList = useCallback(
    ({ children }: PropsWithChildren) => (
      <div className="service hidden items-center gap-2 text-neutral-200">
        <CircleCheckBig className="size-4 text-cyan-500" />
        <p className="text-sm sm:text-base">{children}</p>
      </div>
    ),
    []
  );

  // Render
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="flex h-full w-full flex-col items-center bg-black/60">
        <div className="mt-28 w-full max-w-7xl px-4 sm:mt-48" ref={container}>
          {/** Hero Banner */}
          <div className="hero-banner hidden min-h-[522px] max-w-[650px] flex-col gap-6 rounded-md p-6 backdrop-blur-sm sm:min-h-[390px] sm:max-w-2/3 sm:gap-10">
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

            <ContactButton className="cta hidden self-start" />

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
