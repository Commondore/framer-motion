import { navLinks } from "@/components/Navbar/navLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-3">
      {navLinks.map((link) => {
        return (
          <Link
            className={
              pathname === link.href ? "bg-black text-white p-2 rounded" : "text-white p-2"
            }
            href={link.href}
            key={link.link}
          >
            {link.link}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
