import { SearchInput } from "@/component/SearchInput";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-3">
        <SearchInput />
      </div>

      {children}
    </div>
  );
}
