"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {

    const pathname = usePathname();
    // console.log(pathname, pathname.includes('dashboard'));
    if (!pathname.includes('dashboard')) {
        return (
            <nav className="p-4">
                <ul className="flex gap-12 justify-center">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/services">
                        <li>Services</li>
                    </Link>
                </ul>
            </nav>
        );
    }
    else {
        return <></>;
    }


};

export default Navbar;
