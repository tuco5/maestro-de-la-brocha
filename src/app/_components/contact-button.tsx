import { Button } from '@/components/ui/button';
import { Whatsapp } from '@/components/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
export function ContactButton({ className }: Props) {
  return (
    <Button
      variant="orange"
      className={cn(
        'flex items-center gap-2 text-lg font-semibold opacity-80 hover:opacity-100',
        className
      )}
      asChild
    >
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <Whatsapp className="size-5" />
        <span>Contácto</span>
      </Link>
    </Button>
  );
}
