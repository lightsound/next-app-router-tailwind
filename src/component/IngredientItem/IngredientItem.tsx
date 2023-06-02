type IngredientItemProps = {
  left?: React.ReactNode;
  main: string;
  right?: React.ReactNode;
  sub?: string;
};

export function IngredientItem({ left, main, right, sub }: IngredientItemProps) {
  return (
    <div className="flex items-center gap-x-4 px-4 py-2">
      <div className="shrink-0">{left}</div>
      <div className="mr-auto">
        <div className="text-mauve-normal leading-snug">{main}</div>
        {sub ? <div className="text-mauve-dim text-sm">{sub}</div> : null}
      </div>
      <div className="shrink-0">{right}</div>
    </div>
  );
}
