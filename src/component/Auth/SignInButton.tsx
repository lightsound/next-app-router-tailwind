"use client";

import { useTransition } from "react";

import { handleSignIn, type AuthActionArgs } from "./action";

export function SignInButton({
  children,
  ...authActionArgs
}: AuthActionArgs & { children?: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await handleSignIn(authActionArgs);
        });
      }}
    >
      {children}
    </button>
  );
}
