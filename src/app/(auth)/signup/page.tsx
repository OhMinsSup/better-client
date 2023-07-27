import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import UserAuthForm from "~/components/auth/user-auth-form";
import { Icons } from "~/components/shared/icons";
import { buttonVariants } from "~/components/ui/button";
import { navigateConfig } from "~/config/navigate";
import { cn } from "~/utils/util";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function Page() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href={navigateConfig.signin}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        로그인
      </Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
