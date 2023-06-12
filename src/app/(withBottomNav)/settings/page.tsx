import { getUser, SignOutButton } from "@/component/Auth";

export default async function Settings() {
  const user = await getUser();

  return (
    <div className="space-y-12 py-5">
      <div className="px-4 text-sm">TODO: ログアウトさせたり規約など表示させたり</div>
      {user ? (
        <SignOutButton revalidatePath="/fav" redirectPath="/fav">
          ログアウト
        </SignOutButton>
      ) : null}
    </div>
  );
}
