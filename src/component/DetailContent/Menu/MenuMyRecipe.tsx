import Link from "next/link";

import { IconLock, IconLockOpen, IconPencil, IconTrash } from "@tabler/icons-react";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/component/DropdownMenu";

import { MenuItemCopy } from "./MenuAction";
import { MenuContainer } from "./MenuContainer";

export function MenuMyRecipe({ id }: { id: string }) {
  return (
    <MenuContainer>
      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href={`/recipe/${id}/edit`}>
            <IconPencil className="mr-2 h-4 w-4" />
            <span>編集する</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <IconLock className="mr-2 h-4 w-4" />
          <span>公開を停止する</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="items-start">
          <IconLockOpen className="mr-2 mt-px h-4 w-4" />
          <div className="flex flex-col">
            <span>レシピを限定公開する</span>
            <span className="mt-px text-xs">URLを知っているユーザーのみ閲覧可能</span>
          </div>
        </DropdownMenuItem>

        <MenuItemCopy />
      </DropdownMenuGroup>

      <div className="p-2 text-xs">
        ※
        公開に関して、公開中は下の2つのメニューを非表示にし、非公開中は「公開を停止する」を非表示にする
      </div>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <IconTrash className="mr-2 h-4 w-4" />
        <span>レシピを削除する</span>
      </DropdownMenuItem>
    </MenuContainer>
  );
}
