export function List({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-mauve-dim divide-y divide-mauve-6 border-y dark:divide-mauvedark-6">
      {children}
    </div>
  );
}
