"use client";

import { IconCopy } from "@tabler/icons-react";

import { DropdownMenuItem } from "@/component/DropdownMenu";

export function MenuItemCopy() {
  return (
    <DropdownMenuItem
      onClick={async () => {
        await global.navigator.clipboard.writeText(window.location.href);
      }}
    >
      <IconCopy className="mr-2 h-4 w-4" />
      <span>URLをコピー</span>
    </DropdownMenuItem>
  );
}
