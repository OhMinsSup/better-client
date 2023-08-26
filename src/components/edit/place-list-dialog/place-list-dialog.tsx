import React from "react";
import { Icons } from "~/components/shared/icons";
import { Button } from "~/components/ui/button";

interface PlaceListDialogProps {}

export default function PlaceListDialog(props: PlaceListDialogProps) {
  return (
    <Button type="button" size="icon" variant="outline" className="shadow-md">
      <Icons.calendarRange className="h-4 w-4" />
    </Button>
  );
}
