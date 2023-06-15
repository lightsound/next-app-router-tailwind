import { RecipeStepItem } from "@/component/RecipeStepItem";

export default function Recipe({}: { params: { id: string } }) {
  const items = [
    {
      content:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。1",
    },
    {
      content:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。2",
    },
    {
      content:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。3",
    },
    {
      content:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。4",
    },
    {
      content:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。5",
    },
    {
      content:
        "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。6",
    },
  ] as const;

  return (
    <div className="-mt-px">
      {items.map((item, index) => {
        return <RecipeStepItem key={item.content} index={index + 1} {...item} />;
      })}
    </div>
  );
}
