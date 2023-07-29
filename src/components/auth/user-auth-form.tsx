"use client";
import React, { useState } from "react";
import { cn } from "~/utils/util";
import { buttonVariants } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Icons } from "~/components/shared/icons";

export default function UserAuthForm() {
  const [isKakaoLoading, setIsKakaoLoading] = useState<boolean>(false);
  return (
    <div className={"grid gap-4"}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              이메일
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              //   disabled={isLoading || isGitHubLoading}
              //   {...register("email")}
            />
            {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <button className={cn(buttonVariants())}>
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            이메일로 로그인
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">또는</span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsKakaoLoading(true);
        }}
        disabled={isKakaoLoading}
      >
        {isKakaoLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.Kakao className="mr-2 h-6 w-6" />
        )}{" "}
        카카오 로그인
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsKakaoLoading(true);
        }}
        disabled={isKakaoLoading}
      >
        {isKakaoLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.plane className="mr-2 h-5 w-5" />
        )}{" "}
        게스트 로그인
      </button>
    </div>
  );
}
