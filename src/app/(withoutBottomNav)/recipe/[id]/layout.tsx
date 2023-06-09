import { DetailContent } from "@/component/DetailContent";

export default function Layout(props: { children: React.ReactNode; params: { id: string } }) {
  const { children, params } = props;

  return (
    <DetailContent
      id={params.id}
      type="recipe"
      name={params.id === "2" ? `マイレシピ` : `シェフのレシピ`}
      description="吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。"
      favCount={1234}
      chef={{ id: params.id, name: "しまぶーシェフ" }}
    >
      {children}
    </DetailContent>
  );
}
