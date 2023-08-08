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

interface PlaceSearchDialogProps {}

export default function PlaceSearchDialog(props: PlaceSearchDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="shadow-md"
        >
          <Icons.search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-full md:h-fit">
        <DialogHeader>
          <DialogTitle>검색</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
