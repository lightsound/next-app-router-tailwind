"use client";

import { useTransition } from "react";

import { handleSignOut, type AuthActionArgs } from "@/component/Auth/action";

export function SignOutButton({
  children,
  ...authActionArgs
}: AuthActionArgs & { children?: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await handleSignOut(authActionArgs);
        });
      }}
    >
      {children}
    </button>
  );
}
