import { FacebookButton, InstagramButton, WhatsappButton } from '@/components/buttons';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="fixed top-0 z-10 flex w-full justify-center backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <Logo className="text-xs sm:text-xs" />
        <div className="flex gap-2 sm:gap-3">
          <FacebookButton />
          <InstagramButton />
          <WhatsappButton />
        </div>
      </div>
    </header>
  );
}
