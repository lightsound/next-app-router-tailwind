import { cn } from "tailwind-variants";

export type RecipeStepItemProps = {
  content?: string;
  index: number;
  right?: React.ReactNode;
};

export function RecipeStepItem({ content, index, right }: RecipeStepItemProps) {
  return (
    <div
      className={cn(
        "flex w-full items-start gap-x-2 bg-[#fff] px-4 py-2",
        "border-x-0 border-y border-y-mauve-7",
        "[&+&]:-mt-px",
      )()}
    >
      <div className="mt-px grid h-5 w-5 shrink-0 select-none place-items-center rounded-full bg-tomato-10 text-sm text-tomato-1 dark:bg-tomatodark-10 dark:text-tomatodark-1">
        {index}
      </div>

      <div className={`flex-1 ${content ? "" : "h-11"}`}>
        <div className="text-mauve-normal leading-snug">{content}</div>
      </div>

      <div className="mt-px shrink-0">{content ? right : null}</div>
    </div>
  );
}
