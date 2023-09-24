import { type ComponentProps } from "react";

import { cn } from "tailwind-variants";

export type InputProps = ComponentProps<"input"> & {
  right?: React.ReactNode;
};

export function Input({ className, right, ...props }: InputProps) {
  return (
    <div className="relative flex items-center [&+&>input]:-mt-px">
      <input
        type="text"
        autoComplete="off"
        className={cn(
          "block w-full pl-4 placeholder:text-mauve-9 focus:z-10",
          "border-x-0 focus:border-x-0",
          "border-y border-y-mauve-7",
          "focus:border-y-mauve-8 focus-visible:ring-inset focus-visible:ring-mauve-8",
          "dark:bg-mauvedark-2 dark:focus:border-y-mauvedark-8 dark:focus-visible:ring-mauvedark-8",
          right ? "pr-10" : "pr-4",
          className,
        )()}
        {...props}
      />
      <div className="absolute right-4 z-20 flex">{right}</div>
    </div>
  );
}
