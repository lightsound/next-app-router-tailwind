"use client";

import { IconX } from "@tabler/icons-react";

import { Input, type InputProps } from "./Input";

export function InputDeletable({ ...props }: Omit<InputProps, "right">) {
  return (
    <Input
      {...props}
      right={
        <button
          type="button"
          className="-mr-0.5 cursor-pointer p-0.5"
          onClick={() => {
            alert("TODO: 削除");
          }}
        >
          <IconX stroke={1.5} className="text-mauve-dim h-4 w-4" />
        </button>
      }
    />
  );
}
