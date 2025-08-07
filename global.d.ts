declare global {
   interface Props {
    className?: string;
  }
  interface PropsWithChildren extends Props {
    children: React.ReactNode;
  }
  type LucidIcon = ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export default global;
