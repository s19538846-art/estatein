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
                <NavigationMenuList>
                    <NavigationMenuItem className="text-[#FFF] flex items-center gap-3">
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className="" href="/docs">
                                Home
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className="" href="/docs">
                                About Us
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className="" href="/docs">
                                Properties
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link className=" " href="/docs">
                                Services
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
