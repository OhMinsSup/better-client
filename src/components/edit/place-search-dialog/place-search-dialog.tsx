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
import { ScrollArea } from "~/components/ui/scroll-area";
import { searchList } from "./mock.data";

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
      <DialogContent className="h-full">
        <DialogHeader>
          <DialogTitle>검색</DialogTitle>
        </DialogHeader>
        <form>
          <Input type="search" placeholder="장소를 검색해주세요." />
        </form>
        <ScrollArea>
          <ul role="list" className="divide-y divide-gray-100">
            {searchList.map((place) => (
              <PlaceSearchDialog.Item key={place.id} place={place} />
            ))}
          </ul>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

interface PlaceSearchDialogItemProps {
  place: any;
}

PlaceSearchDialog.Item = function PlaceSearchDialogItem({
  place,
}: PlaceSearchDialogItemProps) {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {place.place_name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {place.address_name}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">
          {place.category_group_name}
        </p>
        <p className="mt-1 text-xs leading-5 text-gray-500">{place.distance}</p>
      </div>
    </li>
  );
};
