export function RecipeStepItem({
  left,
  main,
  sub,
}: {
  left: React.ReactNode;
  main: string;
  sub: string;
}) {
  return (
    <div className="border-mauve-dim flex items-baseline gap-x-2 border-b px-4 py-2">
      {left}
      <div className="flex-1 space-y-1">
        <div className="text-mauve-normal leading-snug">{main}</div>
        <div className="text-mauve-dim text-sm">{sub}</div>
      </div>
    </div>
  );
}
