'use client';
import { useGSAP, gsap } from '@/lib/gsap';
import { FacebookButton, InstagramButton, WhatsappButton } from '@/components/buttons';
import { Logo } from '@/components/logo';

export function Header() {
  useGSAP(() => {
    gsap.to('.header', { y: 96, duration: 0.4, ease: 'power3.out', opacity: 1 });
    gsap.to('.nav-btn', {
      scale: 1,
      duration: 0.2,
      ease: 'elastic.out',
      delay: 0.3,
      stagger: 0.1,
    });
  }, []);

  return (
    <header className="header fixed -top-24 right-0 left-0 flex w-full justify-center opacity-10 backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <Logo className="text-xs sm:text-xs" />
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <FacebookButton className="nav-btn scale-0" />
          <InstagramButton className="nav-btn scale-0" />
          <WhatsappButton className="nav-btn scale-0" />
        </div>
      </div>
    </header>
  );
}
