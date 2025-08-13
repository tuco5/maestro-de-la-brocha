import { Button } from '@/components/ui/button';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '@/components/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
export function ContactButton({ className }: Props) {
  return (
    <Button
      variant="cta"
      size="lg"
      className={cn('flex items-center gap-2 text-lg font-semibold', className)}
      asChild
    >
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="size-5" />
        <span>¡Cotiza ahora!</span>
      </Link>
    </Button>
  );
}

export function WhatsappButton() {
  return (
    <Button
      size="icon"
      className="relative overflow-hidden rounded-full bg-[linear-gradient(135deg,#11998e,#38ef7d_50%,#4B5563_50%)] bg-[length:200%_200%] bg-[position:100%_100%] font-medium text-white transition-all duration-500 ease-out hover:bg-[position:0_0]"
    >
      <WhatsappIcon className="size-6" />
    </Button>
  );
}

export function FacebookButton() {
  return (
    <Button
      size="icon"
      className="relative overflow-hidden rounded-full bg-[linear-gradient(135deg,#0072ff,#00c6ff_50%,#4B5563_50%)] bg-[length:200%_200%] bg-[position:100%_100%] text-white transition-all duration-500 ease-out hover:bg-[position:0_0]"
    >
      <FacebookIcon className="size-6" />
    </Button>
  );
}

export function InstagramButton() {
  return (
    <Button
      size="icon"
      className="relative overflow-hidden rounded-full bg-[linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045_50%,#4B5563_50%)] bg-[length:200%_200%] bg-[position:100%_100%] text-white transition-all duration-500 ease-out hover:bg-[position:0_0]"
    >
      <InstagramIcon className="size-6" />
    </Button>
  );
}
