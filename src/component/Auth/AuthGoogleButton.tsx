"use client";

import { useTransition } from "react";

import { handleSignIn, type SignInArgs } from "./action";

export function AuthGoogleButton({ ...rest }: SignInArgs) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-lg bg-blue-10 px-5 py-2.5 text-center text-sm font-bold text-mauve-1 hover:bg-blue-10/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-10/50 dark:focus-visible:ring-blue-10/50"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await handleSignIn(rest);
        });
      }}
    >
      <svg
        className="-ml-1 mr-2 h-4 w-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        />
      </svg>
      Google ログイン
    </button>
  );
}
