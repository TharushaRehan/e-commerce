"use client";

import { navLinks } from "@/config/site";
import { Search, ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const SiteHeader = () => {
  const [search, setSearch] = useState("");

  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <section className="container">
        <div className="flex justify-between items-center py-5 gap-10">
          <div>
            <p>Shop.Co</p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((nav) => (
                <NavigationMenuItem key={nav.name}>
                  {nav.expandable ? (
                    <>
                      <NavigationMenuTrigger>{nav.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {nav.subLinks?.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:cursor-pointer`}
                    >
                      {nav.name}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* <nav className="hidden lg:flex lg:gap-8">
            {navLinks.map((nav) => (
              <div key={nav.name} className="flex">
                <p className="font-medium text-nowrap">{nav.name}</p>
                {nav.expandable && <ChevronDown />}
              </div>
            ))}
          </nav> */}

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="focus-visible:ring-0 focus-visible:ring-offset-0 hidden md:block md:max-w-[500px]"
          />

          <div className="flex">
            <Button variant={"ghost"} className="block md:hidden">
              <Search />
            </Button>
            <Link href="" className={buttonVariants({ variant: "ghost" })}>
              <ShoppingCart />
            </Link>
            <Link href="" className={buttonVariants({ variant: "ghost" })}>
              <User />
            </Link>
            <MobileNav />
          </div>
        </div>
      </section>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/20 to-neutral-200/0" />
    </header>
  );
};

export default SiteHeader;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
