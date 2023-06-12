"use client";

import { useTransition } from "react";

import { handleSignIn, type SignInArgs } from "./action";

export function SignInButton({ children, ...rest }: SignInArgs & { children: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await handleSignIn(rest);
        });
      }}
    >
      {children}
    </button>
  );
}
