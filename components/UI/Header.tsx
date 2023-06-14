/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "300" });

type HeaderProps = {
  showMenu: boolean;
  toggle: () => void;
};

export const links = ["About", "Careers", "Events", "Products", "Support"];

export default function Header({ showMenu, toggle }: HeaderProps) {
  return (
    <header className="absolute z-30 flex w-full items-center justify-between p-6 xl:px-40 xl:py-16">
      <img src="/logo.svg" alt="logo" className="h-6 cursor-pointer lg:h-8" />

      <nav>
        <ul className="relative hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link} className="group">
              <Link
                href="/"
                className={`relative font-bold text-white transition-all duration-300 ease-out ${josefinSans.className} pb-3 xl:text-lg`}
              >
                {link}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 transform bg-white opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={toggle} className="z-40 cursor-pointer md:hidden">
        <img
          src={!showMenu ? "icon-hamburger.svg" : "icon-close.svg"}
          alt="menu"
        />
      </button>
    </header>
  );
}
