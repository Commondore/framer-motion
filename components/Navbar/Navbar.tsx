"use client";
import BurgerButton from "@/components/Navbar/BurgerButton";
import Logo from "@/components/Navbar/Logo";
import MobileNav from "@/components/Navbar/MobileNav";
import Nav from "@/components/Navbar/Nav";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="bg-purple-500 text-white shadow-lg px-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
        <Logo />
        {isMobile ? (
          <>
            <MobileNav isOpen={isOpen} />
            <BurgerButton active={isOpen} click={() => setIsOpen((v) => !v)} />
          </>
        ) : (
          <Nav />
        )}
      </div>
    </div>
  );
};

export default Navbar;
