type IngredientItemProps = {
  left?: React.ReactNode;
  main: string;
  right?: React.ReactNode;
};

export function IngredientItem({ left, main, right }: IngredientItemProps) {
  return (
    <div className={`flex items-center gap-x-2 px-4 py-2`}>
      {left ? <div className="shrink-0">{left}</div> : null}
      <div className="text-mauve-normal mr-auto leading-snug">{main}</div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
