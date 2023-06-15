"use client";

import { useRouter } from "next/navigation";

export function BackButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length >= 2) {
          router.back();
          return;
        }
        router.push("/");
      }}
      className="text-mauve-normal absolute left-3 top-3 z-10 cursor-pointer rounded-full p-1.5"
    >
      {children}
    </button>
  );
}
