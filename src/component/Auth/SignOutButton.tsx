"use client";

import { useTransition } from "react";

import { handleSignOut, type SignOutArgs } from "@/component/Auth/action";

export function SignOutButton({ children, ...rest }: SignOutArgs & { children: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await handleSignOut(rest);
        });
      }}
    >
      {children}
    </button>
  );
}
