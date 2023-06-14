import React, { useEffect, useState } from "react";
import { links } from "./Header";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "300" });

type Props = {
  isOpen: boolean;
};

export default function MenuMobile({ isOpen }: Props) {
  const [display, setDisplay] = useState(isOpen ? "block" : "none");

  useEffect(() => {
    if (isOpen) {
      setDisplay("block");
    } else {
      setTimeout(() => setDisplay("none"), 500);
    }
  }, [isOpen]);

  return (
    <nav
      className="fixed z-20 w-full transition-opacity duration-500 ease-in-out"
      style={{ display, opacity: isOpen ? 1 : 0 }}
    >
      <ul className="sticky top-[20%] flex w-full flex-col space-y-6 bg-black px-6 pb-60 pt-40 md:hidden">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="/"
              className={`font-bold text-white transition duration-300 ease-out ${josefinSans.className} text-2xl uppercase`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
