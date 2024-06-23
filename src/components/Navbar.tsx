"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Button from "./Button";

function Navbar() {
  const pathname = usePathname();
  const navbar = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Portofolio",
      href: "/portofolio",
    },
    {
      name: "Comunity",
      href: "/comunity",
    },
    {
      name: "Price",
      href: "/price",
    },
  ];
  return (
    <div className="flex justify-between p-5 items-center">
      <div className="flex">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="logo"
          className="w-10 h-10"
        />
        <h1 className="poppins-light text-[10px] text-gray-500 ml-3 -mt-4">
          Junx Web Developer{" "}
          <span className="text-orange-500 text-4xl animate-pulse">.</span>
        </h1>
      </div>
      <div>
        {navbar.map((row, index) => (
          <Link
            href={row.href}
            key={index}
            className={`mx-5 text-xs py-2 ${
              row.href === pathname &&
              "text-orange-500 border-b-2 border-orange-500"
            }`}
          >
            {row.name}
          </Link>
        ))}
      </div>
      <Button className={"w-20"}>Join Us</Button>
    </div>
  );
}

export default Navbar;
