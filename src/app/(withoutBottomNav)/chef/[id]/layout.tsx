import { type Route } from "next";

import { Tab } from "@/component/Tab";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <div className="aspect-square bg-tomato-3" />

      <div className="space-y-3 p-4">
        <h1 className="text-2xl font-bold">シェフ {params.id}</h1>
        <p>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
        </p>
        <div>
          <span className="mr-0.5 font-bold">1,234</span>
          <span>フォロワー</span>
        </div>
      </div>

      <Tab
        items={[
          { children: "レシピ", href: `/chef/${params.id}` as Route },
          { children: "リンク", href: `/chef/${params.id}/link` as Route },
        ]}
      />

      {children}
    </div>
  );
}
