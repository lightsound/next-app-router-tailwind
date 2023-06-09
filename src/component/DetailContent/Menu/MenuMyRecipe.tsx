import { IconCopy, IconLock, IconLockOpen, IconPencil, IconTrash } from "@tabler/icons-react";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/component/DropdownMenu";

import { MenuContainer } from "./MenuContainer";

export function MenuMyRecipe() {
  return (
    <MenuContainer>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <IconPencil className="mr-2 h-4 w-4" />
          <span>編集する</span>
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
        <DropdownMenuItem disabled>
          <IconCopy className="mr-2 h-4 w-4" />
          <span>URLをコピー</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <IconTrash className="mr-2 h-4 w-4" />
        <span>レシピを削除する</span>
      </DropdownMenuItem>
    </MenuContainer>
  );
}
