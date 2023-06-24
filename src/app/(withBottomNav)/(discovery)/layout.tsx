import { Suspense } from "react";

import { SearchInput } from "@/component/SearchInput";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-3">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>

      {children}
    </div>
  );
}
