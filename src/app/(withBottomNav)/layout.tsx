import { AppLayout } from "@/component/Layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppLayout hasBottomNav>{children}</AppLayout>;
}
