import { SectionHeader, type SectionHeaderProps } from "./SectionHeader";

type SectionProps = SectionHeaderProps & {
  children: React.ReactNode;
  noPadding?: boolean;
};

export function Section({ children, noPadding, ...headerProps }: SectionProps) {
  return (
    <div className="space-y-3">
      <SectionHeader {...headerProps} />
      <div className={noPadding ? undefined : "px-4"}>{children}</div>
    </div>
  );
}
