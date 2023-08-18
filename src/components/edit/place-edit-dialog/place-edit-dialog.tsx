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

interface PlaceEditDialogProps {}

export default function PlaceEditDialog(props: PlaceEditDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="shadow-md"
        >
          <Icons.pin className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-full md:h-fit">
        <DialogHeader>
          <DialogTitle>장소 추가</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
