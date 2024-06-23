import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="mx-32 mt-20">
      <h1 className="relative capitalize text-center bg-[#030637] h-[100px] z-10">
        these are some projects
      </h1>
      <Image
        src="/portofolio.png"
        width={350}
        height={350}
        alt="logo"
        className="w-32 -mt-[180px] mx-auto z-0"
      />
      <div className="grid grid-cols-3 gap-10 mt-10 mb-32 relative z-20">
        <div className="transition-all duration-500 hover:border-orange-500 text-center border border-white rounded-lg p-5 pt-10">
          <div className="flex justify-between">
            <h1 className="font-bold text-start mb-3">Website E-Commerce</h1>
            <p>&rarr;</p>
          </div>
          <p className="text-justify text-xs">
            Ini adalah deskripsi mengenai judul dari website e-commerce, dimana
            menjelaskan sebagaimana mestinya dengan terstruktur
          </p>
          <div className="mt-5 flex">
            <button className="bg-none shadow-none border border-gray-500 w-12 text-[6px] p-1 text-gray-500 rounded-full">
              ReactJs
            </button>
            <button className="mx-1 bg-none shadow-none border border-gray-500 rounded-full w-12 text-[6px] p-1 text-gray-500">
              Tailwind
            </button>
            <button className="mx-1 bg-none shadow-none border border-gray-500 w-12 text-[6px] p-1 text-gray-500 rounded-full">
              MySQL
            </button>
            <button className="mx-1 bg-none shadow-none border border-gray-500 w-12 text-[6px] p-1 text-gray-500 rounded-full">
              AI
            </button>
          </div>
          <Image
            src="/logo.jpg"
            width={300}
            height={200}
            alt="logo"
            className="mx-auto w-full h-[200px] object-cover mt-5 rounded-lg"
          />
          <div className="flex text-[8px] text-gray-500 mt-8 mb-3">
            <p className="mx-1">0 viewes</p>
            <p className="mx-1">0 likes</p>
            <p className="mx-1">0 shared</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
