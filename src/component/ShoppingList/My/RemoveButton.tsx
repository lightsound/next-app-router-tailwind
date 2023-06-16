"use client";

export function RemoveButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="text-tomato-dim -mr-2 px-2 py-0.5 text-sm sm:hover:underline"
      onClick={() => {
        return alert("まだ未完成の部分です");
      }}
    >
      {children}
    </button>
  );
}
