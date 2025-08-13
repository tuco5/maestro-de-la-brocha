'use client';
import { useGSAP, gsap } from '@/lib/gsap';
import { FacebookButton, InstagramButton, WhatsappButton } from '@/components/buttons';
import { Logo } from '@/components/logo';

export function Header() {
  useGSAP(() => {
    gsap.to('.header', { y: 96, duration: 0.6, ease: 'power3.out' });
    gsap.to('.face-btn', { scale: 1, duration: 0.25, ease: 'elastic.out', delay: 0.85 });
    gsap.to('.insta-btn', { scale: 1, duration: 0.2, ease: 'elastic.out', delay: 0.7 });
    gsap.to('.whats-btn', { scale: 1, duration: 0.15, ease: 'elastic.out', delay: 0.55 });
  }, []);

  return (
    <header className="header fixed -top-24 z-10 flex w-full justify-center backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <Logo className="text-xs sm:text-xs" />
        <div className="flex gap-2 sm:gap-3">
          <FacebookButton className="face-btn scale-0" />
          <InstagramButton className="insta-btn scale-0" />
          <WhatsappButton className="whats-btn scale-0" />
        </div>
      </div>
    </header>
  );
}
