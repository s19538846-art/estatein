import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <>
            <header className="bg-[#1A1A1A] px-4 py-5">
                <div className="flex max-w-7xl m-auto items-center justify-between">
                    <div className="">
                        <Link href="/">
                            <Image
                                src="/Logo.svg"
                                alt="/"
                                width={160}
                                height={48}
                            />
                        </Link>
                    </div>
                    <Navbar />
                    <Button className="bg-[#141414] border border-[#262626] rounded-[10px] px-6 py-4 hidden md:flex">
                        Contact Us
                    </Button>
                    <div className="md:hidden">
                        <Image
                            src="/burgerBtn.svg"
                            alt="/"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}
