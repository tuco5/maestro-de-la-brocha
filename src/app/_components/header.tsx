'use client';
import { useGSAP, gsap } from '@/lib/gsap';
import { FacebookButton, InstagramButton, WhatsappButton } from '@/components/buttons';
import { Logo } from '@/components/logo';
import { useRef } from 'react';

export function Header() {
  const container = useRef(null);
  useGSAP(() => {
    gsap.to('.header', { y: 96, duration: 0.6, ease: 'power3.out' });
  }, []);

  useGSAP(
    () => {
      gsap.to('.btn', {
        scale: 1,
        duration: 0.25,
        ease: 'elastic.out',
        delay: 0.55,
        stagger: 0.15,
      });
    },
    { scope: container }
  );

  return (
    <header className="header fixed -top-24 flex w-full justify-center backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <Logo className="text-xs sm:text-xs" />
        <div className="flex gap-2 sm:gap-3" ref={container}>
          <FacebookButton className="btn scale-0" />
          <InstagramButton className="btn scale-0" />
          <WhatsappButton className="btn scale-0" />
        </div>
      </div>
    </header>
  );
}
