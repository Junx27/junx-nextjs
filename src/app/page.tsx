import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="">
      <div className="p-32 pb-5 flex justify-between items-center bg-gradient-to-b from-[#030637] to-[#240750]">
        <div className="mx-auto">
          <h1 className="text-xl mt-10">
            Welcome to Junx Web Developer
            <span className="text-orange-500 text-4xl animate-pulse">.</span>
          </h1>
          <p className="text-[10px] text-gray-500 poppins-light mt-5">
            With us make your dream of having a website come true.
          </p>
          <p className="w-96 text-xs poppins-light mt-5 leading-relaxed">
            We build websites according to your needs, we like to create
            friendly websites which use HTML, CSS, Bootstrap, Tailwind, Laravel,
            ReactJs, MySQL, and so on according to your needs.
          </p>
          <div className="flex">
            <Link href="/price">
              <Button className="w-32 capitalize mt-10">
                see our price list
              </Button>
            </Link>
            <Link href="/price">
              <Button className="w-32 capitalize mt-10 ml-10 bg-none shadow-none border border-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto">
          <Image src="/hero.png" width={350} height={350} alt="logo" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-20 mx-32 mt-10">
        <div className="transition-all duration-700 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 border border-white rounded-2xl p-5 pb-10 cursor-pointer">
          <h1 className="capitalize">application development costs</h1>
          <p className="poppins-light text-xs mt-5 leading-relaxed">
            Friendly prices according to what you offer, we will provide a
            solution for that.
          </p>
        </div>
        <div className="transition-all duration-700 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 border border-white rounded-2xl p-5 pb-10 cursor-pointer">
          <h1 className="capitalize">application development process</h1>
          <p className="poppins-light text-xs mt-5 leading-relaxed">
            Fast processing for application creation using the latest
            technology.
          </p>
        </div>
        <div className="transition-all duration-700 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 border border-white rounded-2xl p-5 pb-10 cursor-pointer">
          <h1 className="capitalize">application maintenance</h1>
          <p className="poppins-light text-xs mt-5 leading-relaxed">
            Application maintenance can be free consultation and maintenance
            during the warranty period.
          </p>
        </div>
      </div>
      <div className="flex mx-64 mt-10 items-center">
        <div>
          <Image src="/grow.png" width={350} height={350} alt="logo" />
        </div>
        <div className="mx-auto w-96">
          <h1 className="text-xl">Grow With Us and Our Community</h1>
          <p className="text-xs mt-5 leading-relaxed">
            Realize having applications and convenience for all your activities,
            developing business by introducing your business to the world.
            however, an application is now very much needed along with the
            development of technology that is a demand.
          </p>
        </div>
      </div>
      <div className="bg-[#030637] pb-32">
        <div className="mt-10 mx-auto border-2 border-dotted rounded-lg py-10 px-32 w-[800px]">
          <h1 className="text-center">Prices start from IDR 2,500,000/year</h1>
          <Link href="/comunity">
            <Button className="w-32 mx-auto mt-10">Find Our Team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
