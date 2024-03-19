"use client";
import Logo from "@/components/Navbar/Logo";
import Nav from "@/components/Navbar/Nav";

const Navbar = () => {
  return (
    <div className="bg-purple-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
