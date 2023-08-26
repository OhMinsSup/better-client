"use client";
import React, { useCallback } from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/shared/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useMapEditContext } from "~/libs/providers/map-edit-provider";

interface ToolbarProps {
  triggerPosition: () => void;
}

export default function Toolbar({ triggerPosition }: ToolbarProps) {
  const { $mapClient } = useMapEditContext();

  const onClickMapPlus = useCallback(() => {
    $mapClient?.zoomIn();
  }, [$mapClient]);

  const onClickMapMinus = useCallback(() => {
    $mapClient?.zoomOut();
  }, [$mapClient]);

  const onClickLocate = useCallback(() => {
    triggerPosition();
  }, [triggerPosition]);

  return (
    <div className="fixed z-[50] left-[35px] pt-5 pb-5">
      <div className="flex flex-col space-y-2">
        <div className="shadow-md flex flex-col">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-none rounded-t-lg"
            onClick={onClickMapPlus}
          >
            <Icons.add className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-none rounded-b-lg"
            onClick={onClickMapMinus}
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
                onClick={onClickLocate}
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
