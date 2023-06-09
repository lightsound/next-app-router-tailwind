import { IconDotsVertical } from "@tabler/icons-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/component/DropdownMenu";

export function MenuContainer({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-mauve-ghost -mr-0.5 -mt-px rounded p-1 outline-none focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7">
          <IconDotsVertical className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-72" align="end">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
