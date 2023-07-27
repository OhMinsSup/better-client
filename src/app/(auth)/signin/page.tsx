import React from "react";
import Link from "next/link";
import { cn } from "~/utils/util";
import { buttonVariants } from "~/components/ui/button";
import { Icons } from "~/components/shared/icons";
import UserAuthForm from "~/components/auth/user-auth-form";
import { navigateConfig } from "~/config/navigate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
};

export default function Page() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href={navigateConfig.root}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        뒤로가기
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href={navigateConfig.signup}
            className="hover:text-brand underline underline-offset-4"
          >
            회원이 아니신가요? 회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
