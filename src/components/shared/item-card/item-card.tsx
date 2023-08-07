import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Icons } from "~/components/shared/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { ItemCardImageSwiper } from "../item-card-image-swiper";

export default function ItemCard() {
  return (
    <Card className="rounded-none border-none shadow-none">
      <CardHeader className="p-3">
        <ItemCardImageSwiper />
      </CardHeader>
      <CardFooter className="flex justify-between p-3 pt-0">
        <div className="flex space-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm text-foreground font-medium leading-loose">
            Columbus
          </span>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center justify-center">
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <Icons.heart className="w-3 h-3" />
            </Button>
            <span className="text-xs text-muted-foreground font-semibold cursor-default">
              1,234
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <Icons.eye className="w-3 h-3" />
            </Button>
            <span className="text-xs text-muted-foreground font-semibold cursor-default">
              1,234
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
