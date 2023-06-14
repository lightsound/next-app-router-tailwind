"use client";

import { useTransition, type ComponentProps } from "react";

import { handleSignIn, type SignInArgs } from "./action";

type SignInButtonProps = SignInArgs & ComponentProps<"button">;

export function SignInButton({ redirectPath, revalidatePath, ...buttonProps }: SignInButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await handleSignIn({ redirectPath, revalidatePath });
        });
      }}
      {...buttonProps}
    />
  );
}
