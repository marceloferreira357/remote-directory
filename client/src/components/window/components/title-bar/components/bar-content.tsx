interface BarContentProps {
  children: React.ReactNode;
}

function BarContent({ children }: BarContentProps) {
  return (
    <div className="relative flex flex-row items-center gap-2">{children}</div>
  );
}

export default BarContent;
