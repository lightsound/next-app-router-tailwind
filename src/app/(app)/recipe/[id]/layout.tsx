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
        <h1 className="text-2xl font-bold">レシピ {params.id}</h1>
        <p>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。
        </p>
        <div>
          <span className="ml-0.5 font-bold">1,234</span>
          <span>お気に入り</span>
        </div>
      </div>

      <Tab
        items={[
          { children: "作り方", href: `/recipe/${params.id}` as Route },
          { children: "材料", href: `/recipe/${params.id}/ingredients` as Route },
        ]}
      />

      {children}
    </div>
  );
}
