import { cn } from "@/lib/utils";

export function Logo({ className }: Props) {
  return (
    <div
      className={cn(
        "font-federo flex items-center gap-2 rounded-full text-3xl font-semibold",
        className,
      )}
    >
      <p className="bg-linear-to-br from-teal-700 to-sky-400 bg-clip-text text-transparent">
        Maestro de la Brocha
      </p>
    </div>
  );
}
