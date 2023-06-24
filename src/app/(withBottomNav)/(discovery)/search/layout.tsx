import { Suspense } from "react";

import { Tab } from "@/component/Tab";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Tab
        items={[
          { children: "レシピ", href: "/search/recipe" },
          { children: "シェフ", href: "/search/chef" },
        ]}
      />
      {children}
    </Suspense>
  );
}
