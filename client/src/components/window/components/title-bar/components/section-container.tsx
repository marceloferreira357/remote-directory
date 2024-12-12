interface SectionContainerProps {
  children: React.ReactNode;
}

function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="relative flex flex-row items-center gap-2">{children}</div>
  );
}

export default SectionContainer;
