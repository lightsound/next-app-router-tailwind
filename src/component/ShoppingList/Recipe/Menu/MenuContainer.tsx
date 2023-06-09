import { IconDotsVertical } from "@tabler/icons-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/component/DropdownMenu";

export function MenuContainer({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <IconDotsVertical className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48" align="end">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
