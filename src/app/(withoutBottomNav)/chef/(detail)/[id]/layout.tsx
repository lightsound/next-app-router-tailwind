import { DetailContent } from "@/component/DetailContent";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <DetailContent
      id={params.id}
      type="chef"
      name={`しまぶーシェフ`}
      description="吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。"
      favCount={1234}
      recipeCount={2345}
    >
      {children}
    </DetailContent>
  );
}
