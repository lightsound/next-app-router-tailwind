import { SectionHeader, type SectionHeaderProps } from "./SectionHeader";

type SectionProps = SectionHeaderProps & {
  children: React.ReactNode;
};

export function Section({ children, ...headerProps }: SectionProps) {
  return (
    <div className="space-y-2">
      <SectionHeader {...headerProps} />
      {children}
    </div>
  );
}
