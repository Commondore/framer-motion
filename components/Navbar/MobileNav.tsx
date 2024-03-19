import { navLinks } from "@/components/Navbar/navLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%", transition: { ease: "linear", duration: 0.1 } }}
      className="fixed top-0 right-0 w-[400px] flex items-center justify-center h-full bg-black"
    >
      <nav className="flex flex-col justify-center items-center gap-3 bg-slate-800 p-10 rounded-xl">
        {navLinks.map((link) => {
          return (
            <Link
              className={
                pathname === link.href ? "bg-white text-black p-2 rounded" : "text-white p-2"
              }
              href={link.href}
              key={link.link}
            >
              {link.link}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default MobileNav;
