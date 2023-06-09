"use client";

export function AddButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="-mb-0.5 -mr-0.5 p-1"
      onClick={() => {
        return alert("まだ未完成の部分です");
      }}
    >
      {children}
    </button>
  );
}
