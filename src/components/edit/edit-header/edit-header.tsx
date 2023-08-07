"use client";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { Icons } from "~/components/shared/icons";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu";
import { PlaceEditDialog } from "../place-edit-dialog";

export default function EditHeader() {
  const router = useRouter();

  const onClickBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="sticky top-0 left-0 z-50 px-4 py-4 2xl:px-5 bg-white backdrop-blur-sm">
      <div className="mx-auto grid grid-cols-12">
        <div className="col-span-6">
          <Button type="button" variant="ghost" onClick={onClickBack} size="sm">
            <Icons.chevronLeft className="sm:mr-2 h-4 w-4" />
            <span className="hidden sm:block">뒤로가기</span>
          </Button>
        </div>
        <div className="col-span-6 relative flex flex-row justify-end">
          <div className="flex justify-center items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <Icons.moreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60" align="end">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>파일</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="min-w-[210px]">
                      <DropdownMenuItem>
                        <span className="truncate">열기</span>
                        <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="truncate">저장</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="truncate">다른 이름으로 저장</span>
                        <DropdownMenuShortcut>⌘⇧S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    나의 장소 <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    임시저장 <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="w-px h-5 bg-gray-200" />
            <PlaceEditDialog />
            <Button type="button" size="sm">
              <Icons.add className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:block">등록하기</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
