import Link from "next/link";
import React from "react";

const Navbar = () => {
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
};

export default Navbar;
