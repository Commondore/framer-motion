"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    link: "Home",
  },
  {
    href: "/example-2",
    link: "Example 2",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-purple-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
        <div className="flex items-center bg-black rounded p-2 text-xl">
          <span>Lo</span>
          <span className="ml-1 px-2 py-1 bg-purple-500 rounded uppercase">go</span>
        </div>
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
      </div>
    </div>
  );
};

export default Navbar;
