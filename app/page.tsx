"use client";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { data } from "@/data";
import { useEffect, useState } from "react";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "300" });

export default function Home() {
  const [[windowWidth], setWindowSize] = useState([0]);
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => setShowMenu(!showMenu);

  useEffect(() => {
    function updateSize() {
      setWindowSize([window.innerWidth]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <main className="overflow-auto">
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/desktop/image-hero.jpg')`,
        }}
        className="h-[650px] w-full bg-hero-mobile bg-cover bg-no-repeat px-6 py-12 lg:bg-hero-desktop lg:bg-center xl:px-40"
      >
        <div className="grid min-h-full content-center justify-center text-white lg:justify-start">
          <h1
            className={`border-2 p-6 text-4xl font-light uppercase ${josefinSans.className}`}
          >
            immersive experiences that
            <br /> deliver
          </h1>
        </div>
      </section>

      <section className="relative px-6 py-24 xl:px-40 xl:py-48">
        <Image
          src="/desktop/image-interactive.jpg"
          alt="interactive"
          loading="lazy"
          className="mx-auto object-contain md:mx-0 md:h-[500px] md:w-[731px]"
          width={327}
          height={527}
        />
        <div className="z-10 bg-white text-center lg:absolute lg:bottom-[13%] lg:right-6 lg:w-[50%] lg:pl-16 lg:pt-6 lg:text-left xl:bottom-[21%] xl:right-[10%] xl:w-[40%] xl:pl-24 xl:pt-20 ">
          <h2
            className={`mb-6 mt-12 text-4xl uppercase xl:text-5xl ${josefinSans.className}`}
          >
            the leader in interactive vr
          </h2>
          <p className="text-gray-500">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-12 xl:px-40 xl:pb-24">
        <div className="flex w-full items-center justify-center md:justify-between">
          <h2
            className={`mb-6 mt-12 text-center text-4xl uppercase ${josefinSans.className}`}
          >
            our creations
          </h2>

          <button className="mt-6 hidden cursor-pointer border border-black px-8 py-2 uppercase transition duration-300 ease-out hover:bg-black hover:text-white md:block">
            see all
          </button>
        </div>

        <div
          className="flex h-full
w-full flex-col items-center justify-center space-y-6 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-1 md:space-y-0 lg:gap-2 xl:gap-6"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="relative h-[120px] w-[327px] transition duration-300 ease-out hover:scale-105 md:h-full md:w-full"
            >
              <h2
                className={`absolute bottom-2 left-4 z-10 uppercase text-white ${josefinSans.className} w-1/3 text-left text-xl md:w-2/3 lg:bottom-4 lg:left-8 lg:text-3xl`}
              >
                {item.title}
              </h2>

              {windowWidth < 426 ? (
                <Link href={`/details/${item.id}`}>
                  <Image
                    src={item.imageMobile}
                    alt={item.title}
                    fill
                    className="object-cover md:object-center"
                  />
                </Link>
              ) : (
                <Link href={`/details/${item.id}`}>
                  <Image
                    src={item.imageDesktop}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                </Link>
              )}
              <div className="absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          ))}
        </div>

        <button className="mx-auto mt-6 block cursor-pointer border border-black px-8 py-2 uppercase transition duration-300 ease-out hover:bg-black hover:text-white md:hidden">
          see all
        </button>
      </section>
    </main>
  );
}
