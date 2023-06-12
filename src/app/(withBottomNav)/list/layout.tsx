import { getUser, RequiredSignInScreen } from "@/component/Auth";
import { TopBar } from "@/component/TopBar";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  return (
    <TopBar center="買い物リスト">
      {user ? children : <RequiredSignInScreen img="girl2" revalidatePath="/list" />}
    </TopBar>
  );
}
