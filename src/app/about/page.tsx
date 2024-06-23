"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="mt-10">
      <h1 className="capitalize text-center">how we are there for you</h1>
      <div className="mx-20 p-10 mt-5">
        <div className="grid grid-cols-4 gap-10">
          <div className="border border-lg p-5 rounded-lg h-[200px] relative">
            <h1 className="capitalize">1. consult your needs</h1>
            <p className="text-xs leading-relaxed mt-5 text-justify">
              Talk to our team about what you need to build a website, adjust it
              to your needs in developing the website.
            </p>
            <p className="absolute bottom-5 right-5">&rarr;</p>
          </div>
          <div className="border border-lg p-5 rounded-lg h-[200px] relative">
            <h1 className="capitalize">2. determine your costs</h1>
            <p className="text-xs leading-relaxed mt-5 text-justify">
              Talk to our team about how much budget will be spent on developing
              your website.
            </p>
            <p className="absolute bottom-5 right-5">&rarr;</p>
          </div>
          <div className="border border-lg p-5 rounded-lg h-[200px] relative">
            <h1 className="capitalize">3. estimated processing time</h1>
            <p className="text-xs leading-relaxed mt-5 text-justify">
              Talk to our team about how long it will take for the website to be
              completed and ready for use.
            </p>
            <p className="absolute bottom-5 right-5">&rarr;</p>
          </div>
          <div className="border border-lg p-5 rounded-lg h-[200px] relative">
            <h1 className="capitalize">4. system maintenance</h1>
            <p className="text-xs leading-relaxed mt-5 text-justify">
              Talk to us about how you can maintain the system that has been
              developed.
            </p>
            <p className="absolute bottom-5 right-5">&rarr;</p>
          </div>
        </div>
        <div className="relative flex justify-center my-32">
          <Image
            src="/about.png"
            width={350}
            height={350}
            alt="logo"
            className="absolute -top-32 left-64 w-64"
          />
          <Button className="w-64">Get More Information</Button>
        </div>
      </div>
    </div>
  );
}

export default page;
