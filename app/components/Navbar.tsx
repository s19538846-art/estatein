import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className="hidden md:block">
            <NavigationMenu>
                <NavigationMenuList className="">
                    <NavigationMenuItem className="text-[#FFF] flex items-center gap-7">
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className="" href="/">
                                Home
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className="" href="/about">
                                About Us
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className="" href="/properties">
                                Properties
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className=" " href="/services">
                                Services
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
