import React from "react";
import { ItemCard } from "~/components/shared/item-card";

export default function Page() {
  return (
    <>
      <div className="py-4"></div>
      <div className="container grid gap-9 grid-cols-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-screen">
        {Array.from({ length: 20 }).map((_, i) => {
          return <ItemCard key={i} />;
        })}
      </div>
    </>
  );
}
