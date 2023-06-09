"use client";

export function RemoveButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="text-tomato-dim -mr-1 px-1 py-0.5 text-sm sm:hover:underline"
      onClick={() => {
        return alert("まだ未完成の部分です");
      }}
    >
      {children}
    </button>
  );
}
