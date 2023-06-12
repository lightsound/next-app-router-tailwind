import { getUser } from "@/component/Auth";
import { TopBar } from "@/component/TopBar";

export default async function Layout({
  authenticated,
  unauthenticated,
}: {
  authenticated: React.ReactNode;
  unauthenticated: React.ReactNode;
}) {
  const user = await getUser();

  return <TopBar center="買い物リスト">{user ? authenticated : unauthenticated}</TopBar>;
}
