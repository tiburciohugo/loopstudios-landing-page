"use client";
import Header from "@/components/UI/Header";
import "./globals.css";
import { Alata } from "next/font/google";
import { useState } from "react";
import MenuMobile from "@/components/UI/MenuMobile";
import Footer from "@/components/UI/Footer";
import { metadata } from "@/metadata";

const alata = Alata({ subsets: ["latin-ext"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => setShowMenu(!showMenu);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <link rel="shortcut icon" href="favicon-32x32.png" type="image/png" />
      </head>
      <body className={alata.className}>
        <Header showMenu={showMenu} toggle={toggle} />
        {showMenu && <MenuMobile isOpen={showMenu} />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
