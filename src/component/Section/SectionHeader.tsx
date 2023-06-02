export type SectionHeaderProps = {
  title: React.ReactNode;
  right?: React.ReactNode;
};

export function SectionHeader({ title, right }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between px-4 font-bold">
      <div className="text-mauve-normal text-xl">{title}</div>
      {right ? <div className="text-mauve-dim contents">{right}</div> : null}
    </div>
  );
}
