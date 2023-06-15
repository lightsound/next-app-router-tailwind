"use client";

import TextareaAutosize, { type TextareaAutosizeProps } from "react-textarea-autosize";
import { cn } from "tailwind-variants";

export function Textarea({ className, ...props }: TextareaAutosizeProps) {
  return (
    <TextareaAutosize
      autoComplete="off"
      minRows={2}
      className={cn(
        "block w-full resize-none px-4 placeholder:text-mauve-9",
        "border-x-0 focus:border-x-0",
        "border-y border-y-mauve-7",
        "focus:border-y-mauve-8 focus-visible:ring-inset focus-visible:ring-mauve-8",
        "dark:bg-mauvedark-2 dark:focus:border-y-mauvedark-8 dark:focus-visible:ring-mauvedark-8",
        "[&+&]:-mt-px",
        className
      )()}
      {...props}
    />
  );
}
