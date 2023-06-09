import Link from "next/link";

import {
  IconChevronDown,
  IconChevronUp,
  IconPlus,
  IconShoppingCartOff,
  IconToolsKitchen2,
} from "@tabler/icons-react";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/component/DropdownMenu";

import { MenuContainer } from "./MenuContainer";

export function Menu({ id }: { id: string }) {
  return (
    <MenuContainer>
      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href={`/recipe/${id}`}>
            <IconToolsKitchen2 className="mr-2 h-4 w-4" />
            <span>レシピ詳細をみる</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <IconChevronUp className="mr-2 h-4 w-4" />
          <span>上に移動する</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <IconChevronDown className="mr-2 h-4 w-4" />
          <span>下に移動する</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <IconPlus className="mr-2 h-4 w-4" />
          <span>買うものを追加する</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <IconShoppingCartOff className="mr-2 h-4 w-4" />
        <span>リストから削除</span>
      </DropdownMenuItem>
    </MenuContainer>
  );
}
