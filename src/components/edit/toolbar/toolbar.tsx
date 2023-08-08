"use client";
import React from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/shared/icons";
import { PlaceEditDialog } from "~/components/edit/place-edit-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { PlaceSearchDialog } from "~/components/edit/place-search-dialog";
import { PlaceListDialog } from "~/components/edit/place-list-dialog";

export default function Toolbar() {
  return (
    <div className="fixed z-[50] right-[35px] pt-5 pb-5">
      <div className="flex flex-col space-y-2">
        <PlaceEditDialog />
        <PlaceListDialog />
        <PlaceSearchDialog />
        <div className="shadow-md flex flex-col">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-none rounded-t-lg"
          >
            <Icons.add className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-none rounded-b-lg"
          >
            <Icons.minus className="h-4 w-4" />
          </Button>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="shadow-md"
              >
                <Icons.locateFixed className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              className="bg-black text-white opacity-80"
              side="bottom"
            >
              <p>현위치</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}