export function Logo({ className }: Props) {
  return (
    <div className={className}>
      <h1 className="text-primary flex flex-col items-center font-bold">
        <span className="font-rap-script text-gradient bg-orange-gradient px-[0.2em] text-[1.8em]">
          Maestro
        </span>
        <span className="font-paint-cans px-[0.3em] text-[0.6em] text-neutral-300">de la</span>
        <span className="font-rap-script text-gradient bg-blue-gradient px-[0.25em] text-[1.8em]">
          brocha
        </span>
      </h1>
    </div>
  );
}
