import { SignInButton } from "@/component/Auth";

export default function FavUnauthenticated() {
  return (
    <div className="space-y-12">
      ログインしろよ
      <SignInButton revalidatePath="/fav">ログイン</SignInButton>
    </div>
  );
}
