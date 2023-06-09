import { IconHeart, IconSearch, IconShoppingCart } from "@tabler/icons-react";

import { ActiveLink } from "@/component/ActiveLink";

export function AppLayout({
  children,
  hasBottomNav = false,
}: {
  children: React.ReactNode;
  hasBottomNav?: boolean;
}) {
  const items = [
    {
      href: "/",
      segment: "(discovery)",
      icon: <IconSearch stroke={1} />,
      text: "さがす",
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
    <div className="mx-auto flex min-h-screen flex-col-reverse sm:max-w-2xl sm:flex-row sm:gap-x-3 sm:px-4 sm:pl-6">
      <nav
        id="nav"
        className={`sm:sticky sm:top-0 sm:self-start ${
          hasBottomNav ? "fixed bottom-0 z-50 w-full sm:bottom-auto sm:w-auto" : "hidden sm:block"
        }`}
      >
        <div className="hidden sm:my-4 sm:block">ロゴ</div>
        <div className="border-mauve-dim flex border-t sm:flex-col sm:border-none">
          {items.map(({ href, segment, icon, text }) => {
            return (
              <ActiveLink
                key={href}
                href={href}
                segment={segment}
                className="group bg-mauve-app flex-1 select-none py-0.5 outline-none sm:-ml-3 sm:py-1"
                activeClassName="font-bold text-mauve-normal [&_svg]:stroke-1.5 sm:[&_svg]:stroke-2"
              >
                <div className="flex w-full flex-col items-center gap-x-2 transition-colors duration-200 group-focus-visible:bg-mauve-ui sm:w-fit sm:flex-row sm:rounded-full sm:py-2 sm:pl-3 sm:pr-5 sm:group-hover:bg-mauve-4 sm:group-active:bg-mauve-5 dark:sm:group-hover:bg-mauvedark-4 dark:sm:group-active:bg-mauvedark-5">
                  {icon}
                  <div className="text-2xs sm:text-base">{text}</div>
                </div>
              </ActiveLink>
            );
          })}
        </div>
      </nav>

      <main
        className={`border-mauve-dim flex-1 overflow-hidden sm:border-x ${
          hasBottomNav ? "pb-20 sm:pb-16" : "pb-16"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
