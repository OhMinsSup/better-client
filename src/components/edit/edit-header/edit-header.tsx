import React from "react";

export default function EditHeader() {
  return (
    <div className="sticky top-0 left-0 z-50 px-4 py-4 2xl:px-5">
      <div className="mx-auto grid grid-cols-12">
        <div className="col-span-6">Left</div>
        <div className="col-span-6 relative flex flex-row justify-end">
          Right
        </div>
      </div>
    </div>
  );
}
