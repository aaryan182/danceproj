"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="AboutUs"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Dance Forms">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses"> Ballet</HoveredLink>
            <HoveredLink href="/courses"> Hip-Hop</HoveredLink>
            <HoveredLink href="/courses"> Contemporary</HoveredLink>
            <HoveredLink href="/courses"> Salsa</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
