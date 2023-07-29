import React from "react";
import styles from "./styles.module.css";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/shared/icons";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function SiteHeaderRight() {
  return (
    <>
      <div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={styles.btn_search}
        >
          <Icons.search />
        </Button>
      </div>
      <div className={styles.create_container}>
        <Button type="button" size="sm">
          <Icons.add className="h-4 w-4 mr-2" />
          <span>작성하기</span>
        </Button>
      </div>
      <div className={styles.user_container}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button aria-label="Profile Dropdown" type="button">
              <div className={styles.user_profile}>
                <Image
                  width={40}
                  height={40}
                  src="https://velog.velcdn.com/thumbnails/veloss/43c665f0-b44c-11e8-b8f5-49cedc880031-DHxDbYmUwAASvCI.png"
                  alt="user profile image"
                />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={10}
            data-navigation-user-menu
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
