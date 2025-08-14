'use client';
import { useRef } from 'react';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap';
import { FacebookButton, InstagramButton, WhatsappButton } from '@/components/buttons';
import { Logo } from '@/components/logo';

/**
 * The `Header` component provides a fixed header bar at the top of the page.
 * It utilizes GSAP animations to animate the header's entrance and control
 * its visibility based on scroll direction. Social media buttons are included
 * within the header. The buttons are animated to scale up on load.
 *
 * Animations:
 * - The header slides in from the top on initial load.
 * - Navigation buttons scale in with a staggered effect.
 * - The header hides and shows based on scroll direction using ScrollTrigger.
 */

export function Header() {
  // Animations
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from('.header', {
        y: -96,
        duration: 0.6,
        ease: 'power3.out',
        opacity: 0,
        onStart: () => {
          document.querySelector('.header')?.classList.replace('hidden', 'flex');
        },
      });
      gsap.to('.nav-btn', {
        scale: 1,
        duration: 0.2,
        ease: 'elastic.out',
        delay: 0.3,
        stagger: 0.1,
      });

      // Scroll Animations
      const navAnimation = gsap.to('.header', {
        yPercent: -100,
        duration: 0.3,
        ease: 'power2.out',
        paused: true,
      });
      ScrollTrigger.create({
        onUpdate: (self) => {
          if (self.animation?.isActive()) return;
          if (self.scroll() < 125) return;
          if (self.direction > 0) navAnimation.play();
          else navAnimation.reverse();
        },
      });
    },
    { scope: container }
  );

  // Render
  return (
    <header ref={container} className="fixed top-0 right-0 left-0 z-20 w-full">
      <div className="header hidden w-full justify-center backdrop-blur-sm">
        <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
          <Logo className="text-xs sm:text-xs" />
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <FacebookButton className="nav-btn scale-0" />
            <InstagramButton className="nav-btn scale-0" />
            <WhatsappButton className="nav-btn scale-0" />
          </div>
        </div>
      </div>
    </header>
  );
}
