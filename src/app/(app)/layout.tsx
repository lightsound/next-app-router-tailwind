import { IconHeart, IconSearch, IconShoppingCart } from "@tabler/icons-react";

import { ActiveLink } from "@/component/ActiveLink";

export default function Layout({ children }: { children: React.ReactNode }) {
  const items = [
    {
      href: "/",
      segment: "(search)",
      icon: <IconSearch stroke={1} />,
      text: "検索",
    },
    {
      href: "/fav",
      segment: "fav",
      icon: <IconHeart stroke={1} />,
      text: "お気に入り",
    },
    {
      href: "/list",
      segment: "list",
      icon: <IconShoppingCart stroke={1} />,
      text: "買い物リスト",
    },
  ] as const;

  return (
    <div className="mx-auto min-h-screen sm:flex sm:max-w-2xl sm:flex-row-reverse sm:gap-x-8 sm:px-4">
      <main className="flex-1 border-x">{children}</main>

      <nav className="sticky top-full sm:pl-2 sm:pr-4">
        <div className="hidden sm:my-4 sm:block">ロゴ</div>
        <div className="flex gap-y-2 border-t sm:flex-col sm:border-none">
          {items.map(({ href, segment, icon, text }) => {
            return (
              <ActiveLink
                key={href}
                href={href}
                segment={segment}
                className="flex flex-1 flex-col items-center gap-x-1 gap-y-0.5 p-1 sm:flex-row"
                activeClassName="font-bold [&>svg]:stroke-2"
              >
                {icon}
                <div className="text-xs sm:text-base">{text}</div>
              </ActiveLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
