type IngredientItemProps = {
  left?: React.ReactNode;
  main: string;
  right?: React.ReactNode;
  sub?: string;
};

export function IngredientItem({ left, main, right, sub }: IngredientItemProps) {
  return (
    <div className={`flex items-center gap-x-2 px-4 ${sub ? "py-2" : "py-3"}`}>
      {left ? <div className="shrink-0">{left}</div> : null}
      <div className="mr-auto">
        <div className="text-mauve-normal leading-snug">{main}</div>
        {sub ? <div className="text-mauve-dim text-sm">{sub}</div> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
