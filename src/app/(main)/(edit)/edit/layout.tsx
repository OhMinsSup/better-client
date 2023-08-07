import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  map: React.ReactNode;
}

export default function Layout({ children, map }: LayoutProps) {
  return (
    <>
      <div className="absolute top-0 right-0">{children}</div>
      <>{map}</>
    </>
  );
}
