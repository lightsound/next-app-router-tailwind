type StringTitle = { title: string; shrinkTitle?: boolean };
type ElementTitle = { shrinkTitle?: never; titleComponent: React.ReactNode };

export type SectionHeaderProps = { right?: React.ReactNode } & (StringTitle | ElementTitle);

function hasTitleComponent(props: StringTitle | ElementTitle): props is ElementTitle {
  return "titleComponent" in props;
}

export function SectionHeader({ right, ...rest }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between px-4 font-bold">
      {hasTitleComponent(rest) ? (
        rest.titleComponent
      ) : (
        <div className={`text-mauve-normal ${rest.shrinkTitle ? "text-base" : "text-xl"}`}>
          {rest.title}
        </div>
      )}
      {right ? <div className="text-mauve-dim contents">{right}</div> : null}
    </div>
  );
}
