/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { links } from "./Header";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "300" });

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black px-6 py-12 lg:flex-row lg:justify-between lg:py-6 xl:px-40">
      <div className="">
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="mx-auto h-6 lg:mx-0" />
        </Link>

        <nav>
          <ul className="mx-auto mt-6 flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
            {links.map((link) => (
              <li key={link} className="group">
                <Link
                  href="/"
                  className={`relative font-bold text-white transition-all duration-300 ease-out ${josefinSans.className} hover:pb-3 xl:text-lg`}
                >
                  {link}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 transform border-b-2 border-b-white bg-white opacity-0 transition-opacity group-hover:opacity-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <nav className="">
          <ul className="mt-8 flex items-center justify-center gap-4 lg:mt-0 lg:justify-end">
            <li className="border-b-2 border-transparent pb-2 transition duration-300 ease-in-out hover:border-white">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="icon-facebook.svg" alt="facebook" />
              </a>
            </li>
            <li className="border-b-2 border-transparent pb-2 transition duration-300 ease-in-out hover:border-white">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="icon-twitter.svg" alt="twitter" />
              </a>
            </li>
            <li className="border-b-2 border-transparent pb-2 transition duration-300 ease-in-out hover:border-white">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="icon-pinterest.svg" alt="pinterest" />
              </a>
            </li>
            <li className="border-b-2 border-transparent pb-2 transition duration-300 ease-in-out hover:border-white">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="icon-instagram.svg" alt="instagram" />
              </a>
            </li>
          </ul>
        </nav>

        <p className="mt-6 text-center text-dark-gray">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
