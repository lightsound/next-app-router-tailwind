import { type ComponentProps } from "react";

import { cn } from "tailwind-variants";

export function AddButton({ className, ...props }: ComponentProps<"button">) {
  return <button type="button" className={cn("text-tomato-dim text-sm", className)()} {...props} />;
}
