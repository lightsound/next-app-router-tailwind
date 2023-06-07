import { TopBar } from "@/component/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <TopBar center="買い物リスト">{children}</TopBar>;
}
