import React from "react";
import { Icons } from "~/components/shared/icons";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface PlaceListDialogProps {}

export default function PlaceListDialog(props: PlaceListDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="shadow-md"
        >
          <Icons.calendarRange className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-full md:h-fit">
        <DialogHeader>
          <DialogTitle>나의 장소</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
