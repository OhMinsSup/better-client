"use client";
import React from "react";
import { Maps } from "~/components/edit/maps";
import { EditForm } from "~/components/edit/edit-form";

export default function Page() {
  return (
    <div className="relative grid grid-cols-10">
      <div className="col-span-12 md:col-span-5 lg:col-span-6 xl:col-span-7">
        <Maps />
      </div>
      <div className="sticky top-0 right-0 left-0 col-span-12 flex flex-col md:h-screen md:min-h-0 md:col-span-5 lg:col-span-4 xl:col-span-3">
        <EditForm />
      </div>
    </div>
  );
}
