import { SearchInput } from "./SearchInput";

type Props = { children: React.ReactNode };

export function SearchBar({ children }: Props) {
  return (
    <div>
      <div className="border-mauve-dim flex h-12 items-center border-b px-3">
        <SearchInput />
      </div>

      {children}
    </div>
  );
}
